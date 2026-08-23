import React from 'react';
const LABEL_10581 = 'component_10581';
export function Component10581({ value = 10581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10581, 'data-value': derived.doubled }, children);
}
export default Component10581;
