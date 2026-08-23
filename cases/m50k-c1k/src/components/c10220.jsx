import React from 'react';
const LABEL_10220 = 'component_10220';
export function Component10220({ value = 10220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10220, 'data-value': derived.doubled }, children);
}
export default Component10220;
