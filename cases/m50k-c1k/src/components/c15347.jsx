import React from 'react';
const LABEL_15347 = 'component_15347';
export function Component15347({ value = 15347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15347, 'data-value': derived.doubled }, children);
}
export default Component15347;
