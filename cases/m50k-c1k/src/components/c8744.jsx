import React from 'react';
const LABEL_8744 = 'component_8744';
export function Component8744({ value = 8744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8744, 'data-value': derived.doubled }, children);
}
export default Component8744;
