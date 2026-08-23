import React from 'react';
const LABEL_18164 = 'component_18164';
export function Component18164({ value = 18164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18164, 'data-value': derived.doubled }, children);
}
export default Component18164;
