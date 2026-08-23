import React from 'react';
const LABEL_17704 = 'component_17704';
export function Component17704({ value = 17704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17704, 'data-value': derived.doubled }, children);
}
export default Component17704;
