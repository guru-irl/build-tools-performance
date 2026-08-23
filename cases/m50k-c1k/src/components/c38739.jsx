import React from 'react';
const LABEL_38739 = 'component_38739';
export function Component38739({ value = 38739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38739, 'data-value': derived.doubled }, children);
}
export default Component38739;
