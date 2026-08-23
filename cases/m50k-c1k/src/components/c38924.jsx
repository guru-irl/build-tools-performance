import React from 'react';
const LABEL_38924 = 'component_38924';
export function Component38924({ value = 38924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38924, 'data-value': derived.doubled }, children);
}
export default Component38924;
