import React from 'react';
const LABEL_16848 = 'component_16848';
export function Component16848({ value = 16848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16848, 'data-value': derived.doubled }, children);
}
export default Component16848;
