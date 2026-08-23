import React from 'react';
const LABEL_5755 = 'component_5755';
export function Component5755({ value = 5755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5755, 'data-value': derived.doubled }, children);
}
export default Component5755;
