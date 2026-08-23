import React from 'react';
const LABEL_21948 = 'component_21948';
export function Component21948({ value = 21948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21948, 'data-value': derived.doubled }, children);
}
export default Component21948;
