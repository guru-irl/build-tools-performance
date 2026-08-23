import React from 'react';
const LABEL_36412 = 'component_36412';
export function Component36412({ value = 36412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36412, 'data-value': derived.doubled }, children);
}
export default Component36412;
