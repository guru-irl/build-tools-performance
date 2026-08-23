import React from 'react';
const LABEL_38648 = 'component_38648';
export function Component38648({ value = 38648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38648, 'data-value': derived.doubled }, children);
}
export default Component38648;
