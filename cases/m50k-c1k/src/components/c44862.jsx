import React from 'react';
const LABEL_44862 = 'component_44862';
export function Component44862({ value = 44862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44862, 'data-value': derived.doubled }, children);
}
export default Component44862;
