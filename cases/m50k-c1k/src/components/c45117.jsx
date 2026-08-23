import React from 'react';
const LABEL_45117 = 'component_45117';
export function Component45117({ value = 45117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45117, 'data-value': derived.doubled }, children);
}
export default Component45117;
