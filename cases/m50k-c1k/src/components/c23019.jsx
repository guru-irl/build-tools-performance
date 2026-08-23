import React from 'react';
const LABEL_23019 = 'component_23019';
export function Component23019({ value = 23019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23019, 'data-value': derived.doubled }, children);
}
export default Component23019;
