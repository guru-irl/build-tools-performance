import React from 'react';
const LABEL_3220 = 'component_3220';
export function Component3220({ value = 3220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3220, 'data-value': derived.doubled }, children);
}
export default Component3220;
