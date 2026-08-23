import React from 'react';
const LABEL_25871 = 'component_25871';
export function Component25871({ value = 25871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25871, 'data-value': derived.doubled }, children);
}
export default Component25871;
