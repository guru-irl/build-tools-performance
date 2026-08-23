import React from 'react';
const LABEL_38121 = 'component_38121';
export function Component38121({ value = 38121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38121, 'data-value': derived.doubled }, children);
}
export default Component38121;
