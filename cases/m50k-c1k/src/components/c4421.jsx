import React from 'react';
const LABEL_4421 = 'component_4421';
export function Component4421({ value = 4421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4421, 'data-value': derived.doubled }, children);
}
export default Component4421;
