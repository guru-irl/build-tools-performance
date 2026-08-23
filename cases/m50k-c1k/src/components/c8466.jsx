import React from 'react';
const LABEL_8466 = 'component_8466';
export function Component8466({ value = 8466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8466, 'data-value': derived.doubled }, children);
}
export default Component8466;
