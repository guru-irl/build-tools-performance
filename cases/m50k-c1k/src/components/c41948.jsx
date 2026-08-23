import React from 'react';
const LABEL_41948 = 'component_41948';
export function Component41948({ value = 41948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41948, 'data-value': derived.doubled }, children);
}
export default Component41948;
