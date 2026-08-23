import React from 'react';
const LABEL_28475 = 'component_28475';
export function Component28475({ value = 28475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28475, 'data-value': derived.doubled }, children);
}
export default Component28475;
