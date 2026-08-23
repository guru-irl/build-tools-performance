import React from 'react';
const LABEL_16461 = 'component_16461';
export function Component16461({ value = 16461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16461, 'data-value': derived.doubled }, children);
}
export default Component16461;
