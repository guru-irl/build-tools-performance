import React from 'react';
const LABEL_46220 = 'component_46220';
export function Component46220({ value = 46220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46220, 'data-value': derived.doubled }, children);
}
export default Component46220;
