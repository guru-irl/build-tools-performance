import React from 'react';
const LABEL_22215 = 'component_22215';
export function Component22215({ value = 22215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22215, 'data-value': derived.doubled }, children);
}
export default Component22215;
