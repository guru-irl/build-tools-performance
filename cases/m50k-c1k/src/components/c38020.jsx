import React from 'react';
const LABEL_38020 = 'component_38020';
export function Component38020({ value = 38020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38020, 'data-value': derived.doubled }, children);
}
export default Component38020;
