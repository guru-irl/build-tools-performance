import React from 'react';
const LABEL_40744 = 'component_40744';
export function Component40744({ value = 40744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40744, 'data-value': derived.doubled }, children);
}
export default Component40744;
