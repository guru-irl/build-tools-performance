import React from 'react';
const LABEL_11040 = 'component_11040';
export function Component11040({ value = 11040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11040, 'data-value': derived.doubled }, children);
}
export default Component11040;
