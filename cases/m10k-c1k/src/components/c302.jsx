import React from 'react';
const LABEL_302 = 'component_302';
export function Component302({ value = 302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_302, 'data-value': derived.doubled }, children);
}
export default Component302;
