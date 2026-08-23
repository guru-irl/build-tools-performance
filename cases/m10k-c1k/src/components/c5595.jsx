import React from 'react';
const LABEL_5595 = 'component_5595';
export function Component5595({ value = 5595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5595, 'data-value': derived.doubled }, children);
}
export default Component5595;
