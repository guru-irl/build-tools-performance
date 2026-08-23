import React from 'react';
const LABEL_20340 = 'component_20340';
export function Component20340({ value = 20340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20340, 'data-value': derived.doubled }, children);
}
export default Component20340;
