import React from 'react';
const LABEL_44220 = 'component_44220';
export function Component44220({ value = 44220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44220, 'data-value': derived.doubled }, children);
}
export default Component44220;
