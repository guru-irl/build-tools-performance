import React from 'react';
const LABEL_31413 = 'component_31413';
export function Component31413({ value = 31413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31413, 'data-value': derived.doubled }, children);
}
export default Component31413;
