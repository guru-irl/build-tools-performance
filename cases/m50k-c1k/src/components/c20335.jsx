import React from 'react';
const LABEL_20335 = 'component_20335';
export function Component20335({ value = 20335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20335, 'data-value': derived.doubled }, children);
}
export default Component20335;
