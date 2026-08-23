import React from 'react';
const LABEL_4164 = 'component_4164';
export function Component4164({ value = 4164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4164, 'data-value': derived.doubled }, children);
}
export default Component4164;
