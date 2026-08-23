import React from 'react';
const LABEL_20248 = 'component_20248';
export function Component20248({ value = 20248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20248, 'data-value': derived.doubled }, children);
}
export default Component20248;
