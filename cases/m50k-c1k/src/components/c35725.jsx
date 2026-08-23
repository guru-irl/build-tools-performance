import React from 'react';
const LABEL_35725 = 'component_35725';
export function Component35725({ value = 35725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35725, 'data-value': derived.doubled }, children);
}
export default Component35725;
