import React from 'react';
const LABEL_18781 = 'component_18781';
export function Component18781({ value = 18781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18781, 'data-value': derived.doubled }, children);
}
export default Component18781;
