import React from 'react';
const LABEL_11520 = 'component_11520';
export function Component11520({ value = 11520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11520, 'data-value': derived.doubled }, children);
}
export default Component11520;
