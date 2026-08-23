import React from 'react';
const LABEL_18798 = 'component_18798';
export function Component18798({ value = 18798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18798, 'data-value': derived.doubled }, children);
}
export default Component18798;
