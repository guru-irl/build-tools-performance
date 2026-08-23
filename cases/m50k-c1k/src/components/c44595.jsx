import React from 'react';
const LABEL_44595 = 'component_44595';
export function Component44595({ value = 44595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44595, 'data-value': derived.doubled }, children);
}
export default Component44595;
