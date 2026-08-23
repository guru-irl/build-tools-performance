import React from 'react';
const LABEL_43287 = 'component_43287';
export function Component43287({ value = 43287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43287, 'data-value': derived.doubled }, children);
}
export default Component43287;
