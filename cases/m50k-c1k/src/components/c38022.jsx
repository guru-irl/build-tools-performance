import React from 'react';
const LABEL_38022 = 'component_38022';
export function Component38022({ value = 38022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38022, 'data-value': derived.doubled }, children);
}
export default Component38022;
