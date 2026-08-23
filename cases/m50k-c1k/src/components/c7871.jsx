import React from 'react';
const LABEL_7871 = 'component_7871';
export function Component7871({ value = 7871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7871, 'data-value': derived.doubled }, children);
}
export default Component7871;
