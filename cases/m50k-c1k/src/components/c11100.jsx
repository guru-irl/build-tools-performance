import React from 'react';
const LABEL_11100 = 'component_11100';
export function Component11100({ value = 11100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11100, 'data-value': derived.doubled }, children);
}
export default Component11100;
