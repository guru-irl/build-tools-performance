import React from 'react';
const LABEL_5052 = 'component_5052';
export function Component5052({ value = 5052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5052, 'data-value': derived.doubled }, children);
}
export default Component5052;
