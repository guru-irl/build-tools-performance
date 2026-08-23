import React from 'react';
const LABEL_28744 = 'component_28744';
export function Component28744({ value = 28744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28744, 'data-value': derived.doubled }, children);
}
export default Component28744;
