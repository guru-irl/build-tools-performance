import React from 'react';
const LABEL_42948 = 'component_42948';
export function Component42948({ value = 42948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42948, 'data-value': derived.doubled }, children);
}
export default Component42948;
