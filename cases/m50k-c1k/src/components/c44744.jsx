import React from 'react';
const LABEL_44744 = 'component_44744';
export function Component44744({ value = 44744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44744, 'data-value': derived.doubled }, children);
}
export default Component44744;
