import React from 'react';
const LABEL_38419 = 'component_38419';
export function Component38419({ value = 38419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38419, 'data-value': derived.doubled }, children);
}
export default Component38419;
