import React from 'react';
const LABEL_10085 = 'component_10085';
export function Component10085({ value = 10085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10085, 'data-value': derived.doubled }, children);
}
export default Component10085;
