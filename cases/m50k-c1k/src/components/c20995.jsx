import React from 'react';
const LABEL_20995 = 'component_20995';
export function Component20995({ value = 20995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20995, 'data-value': derived.doubled }, children);
}
export default Component20995;
