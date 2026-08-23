import React from 'react';
const LABEL_38903 = 'component_38903';
export function Component38903({ value = 38903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38903, 'data-value': derived.doubled }, children);
}
export default Component38903;
