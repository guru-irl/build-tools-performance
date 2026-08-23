import React from 'react';
const LABEL_18111 = 'component_18111';
export function Component18111({ value = 18111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18111, 'data-value': derived.doubled }, children);
}
export default Component18111;
