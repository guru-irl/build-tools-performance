import React from 'react';
const LABEL_8745 = 'component_8745';
export function Component8745({ value = 8745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8745, 'data-value': derived.doubled }, children);
}
export default Component8745;
