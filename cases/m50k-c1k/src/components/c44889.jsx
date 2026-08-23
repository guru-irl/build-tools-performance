import React from 'react';
const LABEL_44889 = 'component_44889';
export function Component44889({ value = 44889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44889, 'data-value': derived.doubled }, children);
}
export default Component44889;
