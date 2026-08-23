import React from 'react';
const LABEL_43595 = 'component_43595';
export function Component43595({ value = 43595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43595, 'data-value': derived.doubled }, children);
}
export default Component43595;
