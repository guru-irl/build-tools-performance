import React from 'react';
const LABEL_46054 = 'component_46054';
export function Component46054({ value = 46054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46054, 'data-value': derived.doubled }, children);
}
export default Component46054;
