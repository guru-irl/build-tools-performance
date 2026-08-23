import React from 'react';
const LABEL_16566 = 'component_16566';
export function Component16566({ value = 16566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16566, 'data-value': derived.doubled }, children);
}
export default Component16566;
