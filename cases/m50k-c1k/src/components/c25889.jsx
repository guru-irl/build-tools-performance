import React from 'react';
const LABEL_25889 = 'component_25889';
export function Component25889({ value = 25889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25889, 'data-value': derived.doubled }, children);
}
export default Component25889;
