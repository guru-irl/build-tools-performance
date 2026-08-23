import React from 'react';
const LABEL_43627 = 'component_43627';
export function Component43627({ value = 43627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43627, 'data-value': derived.doubled }, children);
}
export default Component43627;
