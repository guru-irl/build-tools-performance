import React from 'react';
const LABEL_7092 = 'component_7092';
export function Component7092({ value = 7092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7092, 'data-value': derived.doubled }, children);
}
export default Component7092;
