import React from 'react';
const LABEL_18064 = 'component_18064';
export function Component18064({ value = 18064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18064, 'data-value': derived.doubled }, children);
}
export default Component18064;
