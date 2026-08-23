import React from 'react';
const LABEL_1220 = 'component_1220';
export function Component1220({ value = 1220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1220, 'data-value': derived.doubled }, children);
}
export default Component1220;
