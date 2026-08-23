import React from 'react';
const LABEL_46325 = 'component_46325';
export function Component46325({ value = 46325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46325, 'data-value': derived.doubled }, children);
}
export default Component46325;
