import React from 'react';
const LABEL_14005 = 'component_14005';
export function Component14005({ value = 14005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14005, 'data-value': derived.doubled }, children);
}
export default Component14005;
