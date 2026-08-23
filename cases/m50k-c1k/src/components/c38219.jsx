import React from 'react';
const LABEL_38219 = 'component_38219';
export function Component38219({ value = 38219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38219, 'data-value': derived.doubled }, children);
}
export default Component38219;
