import React from 'react';
const LABEL_10912 = 'component_10912';
export function Component10912({ value = 10912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10912, 'data-value': derived.doubled }, children);
}
export default Component10912;
