import React from 'react';
const LABEL_32936 = 'component_32936';
export function Component32936({ value = 32936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32936, 'data-value': derived.doubled }, children);
}
export default Component32936;
