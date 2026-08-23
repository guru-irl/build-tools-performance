import React from 'react';
const LABEL_29889 = 'component_29889';
export function Component29889({ value = 29889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29889, 'data-value': derived.doubled }, children);
}
export default Component29889;
