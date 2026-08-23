import React from 'react';
const LABEL_38502 = 'component_38502';
export function Component38502({ value = 38502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38502, 'data-value': derived.doubled }, children);
}
export default Component38502;
