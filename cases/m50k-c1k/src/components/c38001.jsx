import React from 'react';
const LABEL_38001 = 'component_38001';
export function Component38001({ value = 38001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38001, 'data-value': derived.doubled }, children);
}
export default Component38001;
