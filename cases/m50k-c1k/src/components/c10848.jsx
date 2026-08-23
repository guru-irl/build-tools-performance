import React from 'react';
const LABEL_10848 = 'component_10848';
export function Component10848({ value = 10848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10848, 'data-value': derived.doubled }, children);
}
export default Component10848;
