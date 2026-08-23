import React from 'react';
const LABEL_7889 = 'component_7889';
export function Component7889({ value = 7889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7889, 'data-value': derived.doubled }, children);
}
export default Component7889;
