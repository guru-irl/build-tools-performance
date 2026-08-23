import React from 'react';
const LABEL_12866 = 'component_12866';
export function Component12866({ value = 12866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12866, 'data-value': derived.doubled }, children);
}
export default Component12866;
