import React from 'react';
const LABEL_20636 = 'component_20636';
export function Component20636({ value = 20636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20636, 'data-value': derived.doubled }, children);
}
export default Component20636;
