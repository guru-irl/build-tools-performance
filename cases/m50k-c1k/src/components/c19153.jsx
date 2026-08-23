import React from 'react';
const LABEL_19153 = 'component_19153';
export function Component19153({ value = 19153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19153, 'data-value': derived.doubled }, children);
}
export default Component19153;
