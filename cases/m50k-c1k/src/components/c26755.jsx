import React from 'react';
const LABEL_26755 = 'component_26755';
export function Component26755({ value = 26755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26755, 'data-value': derived.doubled }, children);
}
export default Component26755;
