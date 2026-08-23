import React from 'react';
const LABEL_20961 = 'component_20961';
export function Component20961({ value = 20961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20961, 'data-value': derived.doubled }, children);
}
export default Component20961;
