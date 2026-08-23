import React from 'react';
const LABEL_25164 = 'component_25164';
export function Component25164({ value = 25164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25164, 'data-value': derived.doubled }, children);
}
export default Component25164;
