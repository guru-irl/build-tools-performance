import React from 'react';
const LABEL_13411 = 'component_13411';
export function Component13411({ value = 13411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13411, 'data-value': derived.doubled }, children);
}
export default Component13411;
