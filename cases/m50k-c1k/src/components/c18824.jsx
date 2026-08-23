import React from 'react';
const LABEL_18824 = 'component_18824';
export function Component18824({ value = 18824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18824, 'data-value': derived.doubled }, children);
}
export default Component18824;
