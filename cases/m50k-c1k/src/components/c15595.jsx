import React from 'react';
const LABEL_15595 = 'component_15595';
export function Component15595({ value = 15595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15595, 'data-value': derived.doubled }, children);
}
export default Component15595;
