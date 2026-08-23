import React from 'react';
const LABEL_43966 = 'component_43966';
export function Component43966({ value = 43966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43966, 'data-value': derived.doubled }, children);
}
export default Component43966;
