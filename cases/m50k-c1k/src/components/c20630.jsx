import React from 'react';
const LABEL_20630 = 'component_20630';
export function Component20630({ value = 20630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20630, 'data-value': derived.doubled }, children);
}
export default Component20630;
