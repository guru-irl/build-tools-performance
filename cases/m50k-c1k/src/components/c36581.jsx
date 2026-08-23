import React from 'react';
const LABEL_36581 = 'component_36581';
export function Component36581({ value = 36581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36581, 'data-value': derived.doubled }, children);
}
export default Component36581;
