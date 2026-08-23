import React from 'react';
const LABEL_20855 = 'component_20855';
export function Component20855({ value = 20855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20855, 'data-value': derived.doubled }, children);
}
export default Component20855;
