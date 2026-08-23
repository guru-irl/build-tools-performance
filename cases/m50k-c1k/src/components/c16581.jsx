import React from 'react';
const LABEL_16581 = 'component_16581';
export function Component16581({ value = 16581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16581, 'data-value': derived.doubled }, children);
}
export default Component16581;
