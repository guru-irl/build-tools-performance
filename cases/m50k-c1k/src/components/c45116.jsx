import React from 'react';
const LABEL_45116 = 'component_45116';
export function Component45116({ value = 45116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45116, 'data-value': derived.doubled }, children);
}
export default Component45116;
