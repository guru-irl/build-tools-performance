import React from 'react';
const LABEL_914 = 'component_914';
export function Component914({ value = 914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_914, 'data-value': derived.doubled }, children);
}
export default Component914;
