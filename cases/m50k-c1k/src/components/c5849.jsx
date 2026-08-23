import React from 'react';
const LABEL_5849 = 'component_5849';
export function Component5849({ value = 5849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5849, 'data-value': derived.doubled }, children);
}
export default Component5849;
