import React from 'react';
const LABEL_38894 = 'component_38894';
export function Component38894({ value = 38894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38894, 'data-value': derived.doubled }, children);
}
export default Component38894;
