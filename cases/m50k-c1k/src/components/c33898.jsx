import React from 'react';
const LABEL_33898 = 'component_33898';
export function Component33898({ value = 33898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33898, 'data-value': derived.doubled }, children);
}
export default Component33898;
