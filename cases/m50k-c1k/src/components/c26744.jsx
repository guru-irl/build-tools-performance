import React from 'react';
const LABEL_26744 = 'component_26744';
export function Component26744({ value = 26744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26744, 'data-value': derived.doubled }, children);
}
export default Component26744;
