import React from 'react';
const LABEL_43661 = 'component_43661';
export function Component43661({ value = 43661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43661, 'data-value': derived.doubled }, children);
}
export default Component43661;
