import React from 'react';
const LABEL_36411 = 'component_36411';
export function Component36411({ value = 36411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36411, 'data-value': derived.doubled }, children);
}
export default Component36411;
