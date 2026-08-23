import React from 'react';
const LABEL_26742 = 'component_26742';
export function Component26742({ value = 26742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26742, 'data-value': derived.doubled }, children);
}
export default Component26742;
