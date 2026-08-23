import React from 'react';
const LABEL_44388 = 'component_44388';
export function Component44388({ value = 44388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44388, 'data-value': derived.doubled }, children);
}
export default Component44388;
