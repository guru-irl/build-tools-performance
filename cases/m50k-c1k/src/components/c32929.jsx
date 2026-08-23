import React from 'react';
const LABEL_32929 = 'component_32929';
export function Component32929({ value = 32929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32929, 'data-value': derived.doubled }, children);
}
export default Component32929;
