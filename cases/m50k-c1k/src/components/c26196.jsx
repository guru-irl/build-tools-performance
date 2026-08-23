import React from 'react';
const LABEL_26196 = 'component_26196';
export function Component26196({ value = 26196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26196, 'data-value': derived.doubled }, children);
}
export default Component26196;
