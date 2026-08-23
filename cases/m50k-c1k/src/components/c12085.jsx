import React from 'react';
const LABEL_12085 = 'component_12085';
export function Component12085({ value = 12085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12085, 'data-value': derived.doubled }, children);
}
export default Component12085;
