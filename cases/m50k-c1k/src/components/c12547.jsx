import React from 'react';
const LABEL_12547 = 'component_12547';
export function Component12547({ value = 12547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12547, 'data-value': derived.doubled }, children);
}
export default Component12547;
