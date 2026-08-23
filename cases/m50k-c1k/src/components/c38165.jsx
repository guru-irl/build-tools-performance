import React from 'react';
const LABEL_38165 = 'component_38165';
export function Component38165({ value = 38165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38165, 'data-value': derived.doubled }, children);
}
export default Component38165;
