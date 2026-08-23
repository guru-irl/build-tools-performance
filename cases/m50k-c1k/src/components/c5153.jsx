import React from 'react';
const LABEL_5153 = 'component_5153';
export function Component5153({ value = 5153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5153, 'data-value': derived.doubled }, children);
}
export default Component5153;
