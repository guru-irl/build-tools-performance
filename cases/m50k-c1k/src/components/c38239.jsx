import React from 'react';
const LABEL_38239 = 'component_38239';
export function Component38239({ value = 38239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38239, 'data-value': derived.doubled }, children);
}
export default Component38239;
