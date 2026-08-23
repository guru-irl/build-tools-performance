import React from 'react';
const LABEL_26220 = 'component_26220';
export function Component26220({ value = 26220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26220, 'data-value': derived.doubled }, children);
}
export default Component26220;
