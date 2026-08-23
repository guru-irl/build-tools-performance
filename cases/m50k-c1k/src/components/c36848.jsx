import React from 'react';
const LABEL_36848 = 'component_36848';
export function Component36848({ value = 36848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36848, 'data-value': derived.doubled }, children);
}
export default Component36848;
