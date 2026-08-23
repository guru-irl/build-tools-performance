import React from 'react';
const LABEL_43897 = 'component_43897';
export function Component43897({ value = 43897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43897, 'data-value': derived.doubled }, children);
}
export default Component43897;
