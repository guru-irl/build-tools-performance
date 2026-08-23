import React from 'react';
const LABEL_31914 = 'component_31914';
export function Component31914({ value = 31914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31914, 'data-value': derived.doubled }, children);
}
export default Component31914;
