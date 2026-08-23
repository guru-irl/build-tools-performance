import React from 'react';
const LABEL_16796 = 'component_16796';
export function Component16796({ value = 16796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16796, 'data-value': derived.doubled }, children);
}
export default Component16796;
