import React from 'react';
const LABEL_19502 = 'component_19502';
export function Component19502({ value = 19502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19502, 'data-value': derived.doubled }, children);
}
export default Component19502;
