import React from 'react';
const LABEL_46287 = 'component_46287';
export function Component46287({ value = 46287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46287, 'data-value': derived.doubled }, children);
}
export default Component46287;
