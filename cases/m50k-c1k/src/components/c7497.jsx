import React from 'react';
const LABEL_7497 = 'component_7497';
export function Component7497({ value = 7497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7497, 'data-value': derived.doubled }, children);
}
export default Component7497;
