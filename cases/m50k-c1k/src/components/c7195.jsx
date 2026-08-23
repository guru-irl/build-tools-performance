import React from 'react';
const LABEL_7195 = 'component_7195';
export function Component7195({ value = 7195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7195, 'data-value': derived.doubled }, children);
}
export default Component7195;
