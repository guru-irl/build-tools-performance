import React from 'react';
const LABEL_45943 = 'component_45943';
export function Component45943({ value = 45943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45943, 'data-value': derived.doubled }, children);
}
export default Component45943;
