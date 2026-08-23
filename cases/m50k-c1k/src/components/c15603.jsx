import React from 'react';
const LABEL_15603 = 'component_15603';
export function Component15603({ value = 15603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15603, 'data-value': derived.doubled }, children);
}
export default Component15603;
