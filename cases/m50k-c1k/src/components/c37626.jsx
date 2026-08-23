import React from 'react';
const LABEL_37626 = 'component_37626';
export function Component37626({ value = 37626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37626, 'data-value': derived.doubled }, children);
}
export default Component37626;
