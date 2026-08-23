import React from 'react';
const LABEL_29595 = 'component_29595';
export function Component29595({ value = 29595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29595, 'data-value': derived.doubled }, children);
}
export default Component29595;
