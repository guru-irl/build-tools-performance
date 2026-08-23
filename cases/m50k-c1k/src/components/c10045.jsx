import React from 'react';
const LABEL_10045 = 'component_10045';
export function Component10045({ value = 10045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10045, 'data-value': derived.doubled }, children);
}
export default Component10045;
