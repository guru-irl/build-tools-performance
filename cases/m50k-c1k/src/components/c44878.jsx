import React from 'react';
const LABEL_44878 = 'component_44878';
export function Component44878({ value = 44878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44878, 'data-value': derived.doubled }, children);
}
export default Component44878;
