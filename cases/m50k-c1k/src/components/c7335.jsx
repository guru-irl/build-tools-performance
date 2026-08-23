import React from 'react';
const LABEL_7335 = 'component_7335';
export function Component7335({ value = 7335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7335, 'data-value': derived.doubled }, children);
}
export default Component7335;
