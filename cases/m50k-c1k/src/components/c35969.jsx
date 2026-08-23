import React from 'react';
const LABEL_35969 = 'component_35969';
export function Component35969({ value = 35969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35969, 'data-value': derived.doubled }, children);
}
export default Component35969;
