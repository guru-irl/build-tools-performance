import React from 'react';
const LABEL_37889 = 'component_37889';
export function Component37889({ value = 37889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37889, 'data-value': derived.doubled }, children);
}
export default Component37889;
