import React from 'react';
const LABEL_26796 = 'component_26796';
export function Component26796({ value = 26796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26796, 'data-value': derived.doubled }, children);
}
export default Component26796;
