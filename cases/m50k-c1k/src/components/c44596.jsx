import React from 'react';
const LABEL_44596 = 'component_44596';
export function Component44596({ value = 44596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44596, 'data-value': derived.doubled }, children);
}
export default Component44596;
