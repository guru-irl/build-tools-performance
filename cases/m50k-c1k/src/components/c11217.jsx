import React from 'react';
const LABEL_11217 = 'component_11217';
export function Component11217({ value = 11217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11217, 'data-value': derived.doubled }, children);
}
export default Component11217;
