import React from 'react';
const LABEL_32436 = 'component_32436';
export function Component32436({ value = 32436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32436, 'data-value': derived.doubled }, children);
}
export default Component32436;
