import React from 'react';
const LABEL_19802 = 'component_19802';
export function Component19802({ value = 19802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19802, 'data-value': derived.doubled }, children);
}
export default Component19802;
