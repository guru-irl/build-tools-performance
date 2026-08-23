import React from 'react';
const LABEL_6909 = 'component_6909';
export function Component6909({ value = 6909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6909, 'data-value': derived.doubled }, children);
}
export default Component6909;
