import React from 'react';
const LABEL_18438 = 'component_18438';
export function Component18438({ value = 18438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18438, 'data-value': derived.doubled }, children);
}
export default Component18438;
