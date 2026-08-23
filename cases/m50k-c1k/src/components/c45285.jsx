import React from 'react';
const LABEL_45285 = 'component_45285';
export function Component45285({ value = 45285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45285, 'data-value': derived.doubled }, children);
}
export default Component45285;
