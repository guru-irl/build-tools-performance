import React from 'react';
const LABEL_25500 = 'component_25500';
export function Component25500({ value = 25500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25500, 'data-value': derived.doubled }, children);
}
export default Component25500;
