import React from 'react';
const LABEL_38301 = 'component_38301';
export function Component38301({ value = 38301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38301, 'data-value': derived.doubled }, children);
}
export default Component38301;
