import React from 'react';
const LABEL_20152 = 'component_20152';
export function Component20152({ value = 20152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20152, 'data-value': derived.doubled }, children);
}
export default Component20152;
