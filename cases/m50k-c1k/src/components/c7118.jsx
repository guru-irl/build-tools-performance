import React from 'react';
const LABEL_7118 = 'component_7118';
export function Component7118({ value = 7118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7118, 'data-value': derived.doubled }, children);
}
export default Component7118;
