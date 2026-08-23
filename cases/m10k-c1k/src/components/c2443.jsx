import React from 'react';
const LABEL_2443 = 'component_2443';
export function Component2443({ value = 2443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2443, 'data-value': derived.doubled }, children);
}
export default Component2443;
