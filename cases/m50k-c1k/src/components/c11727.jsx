import React from 'react';
const LABEL_11727 = 'component_11727';
export function Component11727({ value = 11727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11727, 'data-value': derived.doubled }, children);
}
export default Component11727;
