import React from 'react';
const LABEL_25595 = 'component_25595';
export function Component25595({ value = 25595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25595, 'data-value': derived.doubled }, children);
}
export default Component25595;
