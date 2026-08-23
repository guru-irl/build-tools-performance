import React from 'react';
const LABEL_3099 = 'component_3099';
export function Component3099({ value = 3099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3099, 'data-value': derived.doubled }, children);
}
export default Component3099;
