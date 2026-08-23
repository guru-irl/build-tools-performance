import React from 'react';
const LABEL_22914 = 'component_22914';
export function Component22914({ value = 22914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22914, 'data-value': derived.doubled }, children);
}
export default Component22914;
