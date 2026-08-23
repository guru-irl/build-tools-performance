import React from 'react';
const LABEL_33335 = 'component_33335';
export function Component33335({ value = 33335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33335, 'data-value': derived.doubled }, children);
}
export default Component33335;
