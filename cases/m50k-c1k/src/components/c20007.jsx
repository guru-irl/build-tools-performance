import React from 'react';
const LABEL_20007 = 'component_20007';
export function Component20007({ value = 20007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20007, 'data-value': derived.doubled }, children);
}
export default Component20007;
