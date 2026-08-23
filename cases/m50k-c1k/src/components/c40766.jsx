import React from 'react';
const LABEL_40766 = 'component_40766';
export function Component40766({ value = 40766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40766, 'data-value': derived.doubled }, children);
}
export default Component40766;
