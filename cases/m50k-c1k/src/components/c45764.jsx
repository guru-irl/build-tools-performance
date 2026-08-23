import React from 'react';
const LABEL_45764 = 'component_45764';
export function Component45764({ value = 45764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45764, 'data-value': derived.doubled }, children);
}
export default Component45764;
