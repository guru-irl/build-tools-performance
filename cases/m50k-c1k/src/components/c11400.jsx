import React from 'react';
const LABEL_11400 = 'component_11400';
export function Component11400({ value = 11400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11400, 'data-value': derived.doubled }, children);
}
export default Component11400;
