import React from 'react';
const LABEL_38803 = 'component_38803';
export function Component38803({ value = 38803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38803, 'data-value': derived.doubled }, children);
}
export default Component38803;
