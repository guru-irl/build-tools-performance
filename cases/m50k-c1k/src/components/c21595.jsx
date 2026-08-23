import React from 'react';
const LABEL_21595 = 'component_21595';
export function Component21595({ value = 21595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21595, 'data-value': derived.doubled }, children);
}
export default Component21595;
