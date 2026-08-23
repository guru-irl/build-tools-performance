import React from 'react';
const LABEL_20659 = 'component_20659';
export function Component20659({ value = 20659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20659, 'data-value': derived.doubled }, children);
}
export default Component20659;
