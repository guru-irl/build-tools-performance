import React from 'react';
const LABEL_16054 = 'component_16054';
export function Component16054({ value = 16054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16054, 'data-value': derived.doubled }, children);
}
export default Component16054;
