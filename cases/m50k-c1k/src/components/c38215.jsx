import React from 'react';
const LABEL_38215 = 'component_38215';
export function Component38215({ value = 38215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38215, 'data-value': derived.doubled }, children);
}
export default Component38215;
