import React from 'react';
const LABEL_24889 = 'component_24889';
export function Component24889({ value = 24889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24889, 'data-value': derived.doubled }, children);
}
export default Component24889;
