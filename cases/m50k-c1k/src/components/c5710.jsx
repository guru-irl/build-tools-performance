import React from 'react';
const LABEL_5710 = 'component_5710';
export function Component5710({ value = 5710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5710, 'data-value': derived.doubled }, children);
}
export default Component5710;
