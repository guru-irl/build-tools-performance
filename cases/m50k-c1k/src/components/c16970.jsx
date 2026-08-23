import React from 'react';
const LABEL_16970 = 'component_16970';
export function Component16970({ value = 16970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16970, 'data-value': derived.doubled }, children);
}
export default Component16970;
