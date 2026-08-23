import React from 'react';
const LABEL_7595 = 'component_7595';
export function Component7595({ value = 7595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7595, 'data-value': derived.doubled }, children);
}
export default Component7595;
