import React from 'react';
const LABEL_22220 = 'component_22220';
export function Component22220({ value = 22220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22220, 'data-value': derived.doubled }, children);
}
export default Component22220;
