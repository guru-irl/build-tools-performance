import React from 'react';
const LABEL_1164 = 'component_1164';
export function Component1164({ value = 1164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1164, 'data-value': derived.doubled }, children);
}
export default Component1164;
