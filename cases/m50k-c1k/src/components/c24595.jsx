import React from 'react';
const LABEL_24595 = 'component_24595';
export function Component24595({ value = 24595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24595, 'data-value': derived.doubled }, children);
}
export default Component24595;
