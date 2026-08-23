import React from 'react';
const LABEL_38429 = 'component_38429';
export function Component38429({ value = 38429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38429, 'data-value': derived.doubled }, children);
}
export default Component38429;
