import React from 'react';
const LABEL_3265 = 'component_3265';
export function Component3265({ value = 3265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3265, 'data-value': derived.doubled }, children);
}
export default Component3265;
