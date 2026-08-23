import React from 'react';
const LABEL_14143 = 'component_14143';
export function Component14143({ value = 14143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14143, 'data-value': derived.doubled }, children);
}
export default Component14143;
