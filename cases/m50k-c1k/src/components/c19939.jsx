import React from 'react';
const LABEL_19939 = 'component_19939';
export function Component19939({ value = 19939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19939, 'data-value': derived.doubled }, children);
}
export default Component19939;
