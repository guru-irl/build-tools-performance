import React from 'react';
const LABEL_5220 = 'component_5220';
export function Component5220({ value = 5220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5220, 'data-value': derived.doubled }, children);
}
export default Component5220;
