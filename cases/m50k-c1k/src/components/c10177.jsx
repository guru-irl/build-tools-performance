import React from 'react';
const LABEL_10177 = 'component_10177';
export function Component10177({ value = 10177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10177, 'data-value': derived.doubled }, children);
}
export default Component10177;
