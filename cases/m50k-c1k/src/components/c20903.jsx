import React from 'react';
const LABEL_20903 = 'component_20903';
export function Component20903({ value = 20903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20903, 'data-value': derived.doubled }, children);
}
export default Component20903;
