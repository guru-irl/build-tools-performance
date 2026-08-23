import React from 'react';
const LABEL_26164 = 'component_26164';
export function Component26164({ value = 26164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26164, 'data-value': derived.doubled }, children);
}
export default Component26164;
