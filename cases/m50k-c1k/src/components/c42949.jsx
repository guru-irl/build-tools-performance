import React from 'react';
const LABEL_42949 = 'component_42949';
export function Component42949({ value = 42949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42949, 'data-value': derived.doubled }, children);
}
export default Component42949;
