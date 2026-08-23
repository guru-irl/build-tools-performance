import React from 'react';
const LABEL_19595 = 'component_19595';
export function Component19595({ value = 19595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19595, 'data-value': derived.doubled }, children);
}
export default Component19595;
