import React from 'react';
const LABEL_5659 = 'component_5659';
export function Component5659({ value = 5659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5659, 'data-value': derived.doubled }, children);
}
export default Component5659;
