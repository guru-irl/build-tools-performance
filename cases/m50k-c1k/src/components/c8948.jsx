import React from 'react';
const LABEL_8948 = 'component_8948';
export function Component8948({ value = 8948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8948, 'data-value': derived.doubled }, children);
}
export default Component8948;
