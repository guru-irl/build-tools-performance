import React from 'react';
const LABEL_38815 = 'component_38815';
export function Component38815({ value = 38815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38815, 'data-value': derived.doubled }, children);
}
export default Component38815;
