import React from 'react';
const LABEL_26848 = 'component_26848';
export function Component26848({ value = 26848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26848, 'data-value': derived.doubled }, children);
}
export default Component26848;
