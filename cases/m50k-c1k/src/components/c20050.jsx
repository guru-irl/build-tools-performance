import React from 'react';
const LABEL_20050 = 'component_20050';
export function Component20050({ value = 20050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20050, 'data-value': derived.doubled }, children);
}
export default Component20050;
