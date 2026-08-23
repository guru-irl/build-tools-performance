import React from 'react';
const LABEL_45184 = 'component_45184';
export function Component45184({ value = 45184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45184, 'data-value': derived.doubled }, children);
}
export default Component45184;
