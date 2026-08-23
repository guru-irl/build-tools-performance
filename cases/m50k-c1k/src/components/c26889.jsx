import React from 'react';
const LABEL_26889 = 'component_26889';
export function Component26889({ value = 26889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26889, 'data-value': derived.doubled }, children);
}
export default Component26889;
