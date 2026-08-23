import React from 'react';
const LABEL_7969 = 'component_7969';
export function Component7969({ value = 7969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7969, 'data-value': derived.doubled }, children);
}
export default Component7969;
