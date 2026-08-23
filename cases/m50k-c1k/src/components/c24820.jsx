import React from 'react';
const LABEL_24820 = 'component_24820';
export function Component24820({ value = 24820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24820, 'data-value': derived.doubled }, children);
}
export default Component24820;
