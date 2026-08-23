import React from 'react';
const LABEL_18220 = 'component_18220';
export function Component18220({ value = 18220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18220, 'data-value': derived.doubled }, children);
}
export default Component18220;
