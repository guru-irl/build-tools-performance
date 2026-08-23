import React from 'react';
const LABEL_35220 = 'component_35220';
export function Component35220({ value = 35220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35220, 'data-value': derived.doubled }, children);
}
export default Component35220;
