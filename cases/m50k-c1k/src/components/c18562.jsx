import React from 'react';
const LABEL_18562 = 'component_18562';
export function Component18562({ value = 18562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18562, 'data-value': derived.doubled }, children);
}
export default Component18562;
