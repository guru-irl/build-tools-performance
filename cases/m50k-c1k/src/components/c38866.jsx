import React from 'react';
const LABEL_38866 = 'component_38866';
export function Component38866({ value = 38866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38866, 'data-value': derived.doubled }, children);
}
export default Component38866;
