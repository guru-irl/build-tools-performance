import React from 'react';
const LABEL_14889 = 'component_14889';
export function Component14889({ value = 14889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14889, 'data-value': derived.doubled }, children);
}
export default Component14889;
