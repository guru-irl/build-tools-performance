import React from 'react';
const LABEL_6283 = 'component_6283';
export function Component6283({ value = 6283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6283, 'data-value': derived.doubled }, children);
}
export default Component6283;
