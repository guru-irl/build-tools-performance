import React from 'react';
const LABEL_6936 = 'component_6936';
export function Component6936({ value = 6936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6936, 'data-value': derived.doubled }, children);
}
export default Component6936;
