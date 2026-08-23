import React from 'react';
const LABEL_11796 = 'component_11796';
export function Component11796({ value = 11796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11796, 'data-value': derived.doubled }, children);
}
export default Component11796;
