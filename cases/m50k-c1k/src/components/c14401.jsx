import React from 'react';
const LABEL_14401 = 'component_14401';
export function Component14401({ value = 14401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14401, 'data-value': derived.doubled }, children);
}
export default Component14401;
