import React from 'react';
const LABEL_38725 = 'component_38725';
export function Component38725({ value = 38725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38725, 'data-value': derived.doubled }, children);
}
export default Component38725;
