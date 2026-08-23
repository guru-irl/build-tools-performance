import React from 'react';
const LABEL_7424 = 'component_7424';
export function Component7424({ value = 7424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7424, 'data-value': derived.doubled }, children);
}
export default Component7424;
