import React from 'react';
const LABEL_35411 = 'component_35411';
export function Component35411({ value = 35411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35411, 'data-value': derived.doubled }, children);
}
export default Component35411;
