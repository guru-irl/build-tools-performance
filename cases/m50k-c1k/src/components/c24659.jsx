import React from 'react';
const LABEL_24659 = 'component_24659';
export function Component24659({ value = 24659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24659, 'data-value': derived.doubled }, children);
}
export default Component24659;
