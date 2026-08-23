import React from 'react';
const LABEL_45432 = 'component_45432';
export function Component45432({ value = 45432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45432, 'data-value': derived.doubled }, children);
}
export default Component45432;
