import React from 'react';
const LABEL_11575 = 'component_11575';
export function Component11575({ value = 11575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11575, 'data-value': derived.doubled }, children);
}
export default Component11575;
