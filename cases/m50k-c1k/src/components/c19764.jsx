import React from 'react';
const LABEL_19764 = 'component_19764';
export function Component19764({ value = 19764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19764, 'data-value': derived.doubled }, children);
}
export default Component19764;
