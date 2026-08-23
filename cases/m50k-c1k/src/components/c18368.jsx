import React from 'react';
const LABEL_18368 = 'component_18368';
export function Component18368({ value = 18368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18368, 'data-value': derived.doubled }, children);
}
export default Component18368;
