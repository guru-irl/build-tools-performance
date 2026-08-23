import React from 'react';
const LABEL_24180 = 'component_24180';
export function Component24180({ value = 24180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24180, 'data-value': derived.doubled }, children);
}
export default Component24180;
