import React from 'react';
const LABEL_40889 = 'component_40889';
export function Component40889({ value = 40889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40889, 'data-value': derived.doubled }, children);
}
export default Component40889;
