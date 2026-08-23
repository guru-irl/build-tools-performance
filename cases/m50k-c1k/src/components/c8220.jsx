import React from 'react';
const LABEL_8220 = 'component_8220';
export function Component8220({ value = 8220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8220, 'data-value': derived.doubled }, children);
}
export default Component8220;
