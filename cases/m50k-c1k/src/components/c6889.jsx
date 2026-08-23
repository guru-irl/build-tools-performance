import React from 'react';
const LABEL_6889 = 'component_6889';
export function Component6889({ value = 6889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6889, 'data-value': derived.doubled }, children);
}
export default Component6889;
