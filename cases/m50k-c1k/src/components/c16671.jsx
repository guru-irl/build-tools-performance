import React from 'react';
const LABEL_16671 = 'component_16671';
export function Component16671({ value = 16671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16671, 'data-value': derived.doubled }, children);
}
export default Component16671;
