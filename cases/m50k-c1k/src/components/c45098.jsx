import React from 'react';
const LABEL_45098 = 'component_45098';
export function Component45098({ value = 45098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45098, 'data-value': derived.doubled }, children);
}
export default Component45098;
