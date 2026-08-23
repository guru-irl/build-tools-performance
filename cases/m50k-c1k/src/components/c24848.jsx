import React from 'react';
const LABEL_24848 = 'component_24848';
export function Component24848({ value = 24848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24848, 'data-value': derived.doubled }, children);
}
export default Component24848;
