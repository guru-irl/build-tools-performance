import React from 'react';
const LABEL_26292 = 'component_26292';
export function Component26292({ value = 26292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26292, 'data-value': derived.doubled }, children);
}
export default Component26292;
