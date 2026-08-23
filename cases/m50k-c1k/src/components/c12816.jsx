import React from 'react';
const LABEL_12816 = 'component_12816';
export function Component12816({ value = 12816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12816, 'data-value': derived.doubled }, children);
}
export default Component12816;
