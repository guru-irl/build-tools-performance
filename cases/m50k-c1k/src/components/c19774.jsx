import React from 'react';
const LABEL_19774 = 'component_19774';
export function Component19774({ value = 19774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19774, 'data-value': derived.doubled }, children);
}
export default Component19774;
