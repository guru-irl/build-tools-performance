import React from 'react';
const LABEL_14854 = 'component_14854';
export function Component14854({ value = 14854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14854, 'data-value': derived.doubled }, children);
}
export default Component14854;
