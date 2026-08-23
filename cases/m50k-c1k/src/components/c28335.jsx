import React from 'react';
const LABEL_28335 = 'component_28335';
export function Component28335({ value = 28335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28335, 'data-value': derived.doubled }, children);
}
export default Component28335;
