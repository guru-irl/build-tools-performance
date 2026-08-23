import React from 'react';
const LABEL_35036 = 'component_35036';
export function Component35036({ value = 35036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35036, 'data-value': derived.doubled }, children);
}
export default Component35036;
