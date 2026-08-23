import React from 'react';
const LABEL_26335 = 'component_26335';
export function Component26335({ value = 26335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26335, 'data-value': derived.doubled }, children);
}
export default Component26335;
