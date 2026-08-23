import React from 'react';
const LABEL_44697 = 'component_44697';
export function Component44697({ value = 44697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44697, 'data-value': derived.doubled }, children);
}
export default Component44697;
