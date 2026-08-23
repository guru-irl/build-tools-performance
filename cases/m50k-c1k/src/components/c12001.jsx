import React from 'react';
const LABEL_12001 = 'component_12001';
export function Component12001({ value = 12001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12001, 'data-value': derived.doubled }, children);
}
export default Component12001;
