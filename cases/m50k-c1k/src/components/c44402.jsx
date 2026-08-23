import React from 'react';
const LABEL_44402 = 'component_44402';
export function Component44402({ value = 44402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44402, 'data-value': derived.doubled }, children);
}
export default Component44402;
