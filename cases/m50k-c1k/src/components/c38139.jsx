import React from 'react';
const LABEL_38139 = 'component_38139';
export function Component38139({ value = 38139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38139, 'data-value': derived.doubled }, children);
}
export default Component38139;
