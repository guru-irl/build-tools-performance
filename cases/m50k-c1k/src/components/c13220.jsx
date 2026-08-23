import React from 'react';
const LABEL_13220 = 'component_13220';
export function Component13220({ value = 13220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13220, 'data-value': derived.doubled }, children);
}
export default Component13220;
