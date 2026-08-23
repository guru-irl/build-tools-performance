import React from 'react';
const LABEL_15335 = 'component_15335';
export function Component15335({ value = 15335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15335, 'data-value': derived.doubled }, children);
}
export default Component15335;
