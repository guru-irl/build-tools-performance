import React from 'react';
const LABEL_35545 = 'component_35545';
export function Component35545({ value = 35545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35545, 'data-value': derived.doubled }, children);
}
export default Component35545;
