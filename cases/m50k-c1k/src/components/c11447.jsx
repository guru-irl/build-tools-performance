import React from 'react';
const LABEL_11447 = 'component_11447';
export function Component11447({ value = 11447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11447, 'data-value': derived.doubled }, children);
}
export default Component11447;
