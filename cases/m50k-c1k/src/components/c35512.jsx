import React from 'react';
const LABEL_35512 = 'component_35512';
export function Component35512({ value = 35512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35512, 'data-value': derived.doubled }, children);
}
export default Component35512;
