import React from 'react';
const LABEL_45073 = 'component_45073';
export function Component45073({ value = 45073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45073, 'data-value': derived.doubled }, children);
}
export default Component45073;
