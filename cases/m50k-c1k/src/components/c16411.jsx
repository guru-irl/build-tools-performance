import React from 'react';
const LABEL_16411 = 'component_16411';
export function Component16411({ value = 16411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16411, 'data-value': derived.doubled }, children);
}
export default Component16411;
