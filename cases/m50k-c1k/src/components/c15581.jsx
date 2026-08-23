import React from 'react';
const LABEL_15581 = 'component_15581';
export function Component15581({ value = 15581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15581, 'data-value': derived.doubled }, children);
}
export default Component15581;
