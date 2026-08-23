import React from 'react';
const LABEL_35842 = 'component_35842';
export function Component35842({ value = 35842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35842, 'data-value': derived.doubled }, children);
}
export default Component35842;
