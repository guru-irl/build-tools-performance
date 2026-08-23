import React from 'react';
const LABEL_4595 = 'component_4595';
export function Component4595({ value = 4595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4595, 'data-value': derived.doubled }, children);
}
export default Component4595;
