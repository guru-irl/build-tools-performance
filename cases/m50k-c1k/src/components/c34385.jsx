import React from 'react';
const LABEL_34385 = 'component_34385';
export function Component34385({ value = 34385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34385, 'data-value': derived.doubled }, children);
}
export default Component34385;
