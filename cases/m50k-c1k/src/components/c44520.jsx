import React from 'react';
const LABEL_44520 = 'component_44520';
export function Component44520({ value = 44520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44520, 'data-value': derived.doubled }, children);
}
export default Component44520;
