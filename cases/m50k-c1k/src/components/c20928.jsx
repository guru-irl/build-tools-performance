import React from 'react';
const LABEL_20928 = 'component_20928';
export function Component20928({ value = 20928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20928, 'data-value': derived.doubled }, children);
}
export default Component20928;
