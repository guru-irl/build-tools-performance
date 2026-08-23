import React from 'react';
const LABEL_44054 = 'component_44054';
export function Component44054({ value = 44054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44054, 'data-value': derived.doubled }, children);
}
export default Component44054;
