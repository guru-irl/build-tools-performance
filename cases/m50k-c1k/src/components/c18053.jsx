import React from 'react';
const LABEL_18053 = 'component_18053';
export function Component18053({ value = 18053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18053, 'data-value': derived.doubled }, children);
}
export default Component18053;
