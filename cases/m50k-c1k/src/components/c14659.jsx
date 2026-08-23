import React from 'react';
const LABEL_14659 = 'component_14659';
export function Component14659({ value = 14659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14659, 'data-value': derived.doubled }, children);
}
export default Component14659;
