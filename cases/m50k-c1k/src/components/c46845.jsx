import React from 'react';
const LABEL_46845 = 'component_46845';
export function Component46845({ value = 46845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46845, 'data-value': derived.doubled }, children);
}
export default Component46845;
