import React from 'react';
const LABEL_20577 = 'component_20577';
export function Component20577({ value = 20577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20577, 'data-value': derived.doubled }, children);
}
export default Component20577;
