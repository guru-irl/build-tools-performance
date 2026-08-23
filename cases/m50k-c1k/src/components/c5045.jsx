import React from 'react';
const LABEL_5045 = 'component_5045';
export function Component5045({ value = 5045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5045, 'data-value': derived.doubled }, children);
}
export default Component5045;
