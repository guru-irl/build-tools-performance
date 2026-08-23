import React from 'react';
const LABEL_41889 = 'component_41889';
export function Component41889({ value = 41889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41889, 'data-value': derived.doubled }, children);
}
export default Component41889;
