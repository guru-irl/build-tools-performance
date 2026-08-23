import React from 'react';
const LABEL_16798 = 'component_16798';
export function Component16798({ value = 16798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16798, 'data-value': derived.doubled }, children);
}
export default Component16798;
