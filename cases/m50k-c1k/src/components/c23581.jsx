import React from 'react';
const LABEL_23581 = 'component_23581';
export function Component23581({ value = 23581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23581, 'data-value': derived.doubled }, children);
}
export default Component23581;
