import React from 'react';
const LABEL_26861 = 'component_26861';
export function Component26861({ value = 26861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26861, 'data-value': derived.doubled }, children);
}
export default Component26861;
