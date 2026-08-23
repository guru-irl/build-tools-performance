import React from 'react';
const LABEL_5311 = 'component_5311';
export function Component5311({ value = 5311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5311, 'data-value': derived.doubled }, children);
}
export default Component5311;
