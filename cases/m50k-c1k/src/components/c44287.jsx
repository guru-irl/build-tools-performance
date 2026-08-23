import React from 'react';
const LABEL_44287 = 'component_44287';
export function Component44287({ value = 44287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44287, 'data-value': derived.doubled }, children);
}
export default Component44287;
