import React from 'react';
const LABEL_32744 = 'component_32744';
export function Component32744({ value = 32744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32744, 'data-value': derived.doubled }, children);
}
export default Component32744;
