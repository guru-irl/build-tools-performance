import React from 'react';
const LABEL_28164 = 'component_28164';
export function Component28164({ value = 28164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28164, 'data-value': derived.doubled }, children);
}
export default Component28164;
