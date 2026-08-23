import React from 'react';
const LABEL_15117 = 'component_15117';
export function Component15117({ value = 15117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15117, 'data-value': derived.doubled }, children);
}
export default Component15117;
