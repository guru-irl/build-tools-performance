import React from 'react';
const LABEL_26564 = 'component_26564';
export function Component26564({ value = 26564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26564, 'data-value': derived.doubled }, children);
}
export default Component26564;
