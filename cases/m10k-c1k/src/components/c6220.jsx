import React from 'react';
const LABEL_6220 = 'component_6220';
export function Component6220({ value = 6220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6220, 'data-value': derived.doubled }, children);
}
export default Component6220;
