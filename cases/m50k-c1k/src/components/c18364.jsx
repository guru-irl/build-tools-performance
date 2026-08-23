import React from 'react';
const LABEL_18364 = 'component_18364';
export function Component18364({ value = 18364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18364, 'data-value': derived.doubled }, children);
}
export default Component18364;
