import React from 'react';
const LABEL_26726 = 'component_26726';
export function Component26726({ value = 26726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26726, 'data-value': derived.doubled }, children);
}
export default Component26726;
