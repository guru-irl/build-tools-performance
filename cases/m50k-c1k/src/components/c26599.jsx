import React from 'react';
const LABEL_26599 = 'component_26599';
export function Component26599({ value = 26599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26599, 'data-value': derived.doubled }, children);
}
export default Component26599;
