import React from 'react';
const LABEL_6898 = 'component_6898';
export function Component6898({ value = 6898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6898, 'data-value': derived.doubled }, children);
}
export default Component6898;
