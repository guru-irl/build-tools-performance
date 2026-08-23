import React from 'react';
const LABEL_34301 = 'component_34301';
export function Component34301({ value = 34301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34301, 'data-value': derived.doubled }, children);
}
export default Component34301;
