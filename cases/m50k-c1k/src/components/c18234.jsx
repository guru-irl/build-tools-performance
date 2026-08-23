import React from 'react';
const LABEL_18234 = 'component_18234';
export function Component18234({ value = 18234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18234, 'data-value': derived.doubled }, children);
}
export default Component18234;
