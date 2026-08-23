import React from 'react';
const LABEL_45527 = 'component_45527';
export function Component45527({ value = 45527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45527, 'data-value': derived.doubled }, children);
}
export default Component45527;
