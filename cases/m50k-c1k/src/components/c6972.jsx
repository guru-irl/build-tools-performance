import React from 'react';
const LABEL_6972 = 'component_6972';
export function Component6972({ value = 6972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6972, 'data-value': derived.doubled }, children);
}
export default Component6972;
