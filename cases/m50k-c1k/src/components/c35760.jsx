import React from 'react';
const LABEL_35760 = 'component_35760';
export function Component35760({ value = 35760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35760, 'data-value': derived.doubled }, children);
}
export default Component35760;
