import React from 'react';
const LABEL_43601 = 'component_43601';
export function Component43601({ value = 43601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43601, 'data-value': derived.doubled }, children);
}
export default Component43601;
