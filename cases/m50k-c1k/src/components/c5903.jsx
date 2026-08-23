import React from 'react';
const LABEL_5903 = 'component_5903';
export function Component5903({ value = 5903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5903, 'data-value': derived.doubled }, children);
}
export default Component5903;
