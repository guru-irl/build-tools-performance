import React from 'react';
const LABEL_38781 = 'component_38781';
export function Component38781({ value = 38781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38781, 'data-value': derived.doubled }, children);
}
export default Component38781;
