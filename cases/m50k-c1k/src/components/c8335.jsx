import React from 'react';
const LABEL_8335 = 'component_8335';
export function Component8335({ value = 8335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8335, 'data-value': derived.doubled }, children);
}
export default Component8335;
