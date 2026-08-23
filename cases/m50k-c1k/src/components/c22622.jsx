import React from 'react';
const LABEL_22622 = 'component_22622';
export function Component22622({ value = 22622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22622, 'data-value': derived.doubled }, children);
}
export default Component22622;
