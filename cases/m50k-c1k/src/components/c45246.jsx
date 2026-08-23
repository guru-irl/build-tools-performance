import React from 'react';
const LABEL_45246 = 'component_45246';
export function Component45246({ value = 45246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45246, 'data-value': derived.doubled }, children);
}
export default Component45246;
