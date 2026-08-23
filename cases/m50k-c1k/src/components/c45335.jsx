import React from 'react';
const LABEL_45335 = 'component_45335';
export function Component45335({ value = 45335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45335, 'data-value': derived.doubled }, children);
}
export default Component45335;
