import React from 'react';
const LABEL_8972 = 'component_8972';
export function Component8972({ value = 8972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8972, 'data-value': derived.doubled }, children);
}
export default Component8972;
