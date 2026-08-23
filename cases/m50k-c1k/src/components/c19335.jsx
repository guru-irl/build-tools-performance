import React from 'react';
const LABEL_19335 = 'component_19335';
export function Component19335({ value = 19335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19335, 'data-value': derived.doubled }, children);
}
export default Component19335;
