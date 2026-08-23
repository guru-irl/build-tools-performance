import React from 'react';
const LABEL_44677 = 'component_44677';
export function Component44677({ value = 44677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44677, 'data-value': derived.doubled }, children);
}
export default Component44677;
