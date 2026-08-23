import React from 'react';
const LABEL_755 = 'component_755';
export function Component755({ value = 755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_755, 'data-value': derived.doubled }, children);
}
export default Component755;
