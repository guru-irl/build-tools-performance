import React from 'react';
const LABEL_1335 = 'component_1335';
export function Component1335({ value = 1335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1335, 'data-value': derived.doubled }, children);
}
export default Component1335;
