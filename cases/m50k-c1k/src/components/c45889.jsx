import React from 'react';
const LABEL_45889 = 'component_45889';
export function Component45889({ value = 45889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45889, 'data-value': derived.doubled }, children);
}
export default Component45889;
