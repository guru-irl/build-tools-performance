import React from 'react';
const LABEL_40755 = 'component_40755';
export function Component40755({ value = 40755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40755, 'data-value': derived.doubled }, children);
}
export default Component40755;
