import React from 'react';
const LABEL_10948 = 'component_10948';
export function Component10948({ value = 10948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10948, 'data-value': derived.doubled }, children);
}
export default Component10948;
