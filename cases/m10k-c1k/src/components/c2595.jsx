import React from 'react';
const LABEL_2595 = 'component_2595';
export function Component2595({ value = 2595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2595, 'data-value': derived.doubled }, children);
}
export default Component2595;
