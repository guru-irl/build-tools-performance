import React from 'react';
const LABEL_20110 = 'component_20110';
export function Component20110({ value = 20110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20110, 'data-value': derived.doubled }, children);
}
export default Component20110;
