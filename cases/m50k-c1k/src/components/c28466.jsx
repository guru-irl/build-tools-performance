import React from 'react';
const LABEL_28466 = 'component_28466';
export function Component28466({ value = 28466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28466, 'data-value': derived.doubled }, children);
}
export default Component28466;
