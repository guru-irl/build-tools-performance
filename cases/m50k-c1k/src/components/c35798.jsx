import React from 'react';
const LABEL_35798 = 'component_35798';
export function Component35798({ value = 35798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35798, 'data-value': derived.doubled }, children);
}
export default Component35798;
