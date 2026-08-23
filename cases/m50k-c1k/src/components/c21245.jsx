import React from 'react';
const LABEL_21245 = 'component_21245';
export function Component21245({ value = 21245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21245, 'data-value': derived.doubled }, children);
}
export default Component21245;
