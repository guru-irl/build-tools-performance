import React from 'react';
const LABEL_5482 = 'component_5482';
export function Component5482({ value = 5482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5482, 'data-value': derived.doubled }, children);
}
export default Component5482;
