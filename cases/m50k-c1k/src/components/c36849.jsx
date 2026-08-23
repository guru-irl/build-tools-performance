import React from 'react';
const LABEL_36849 = 'component_36849';
export function Component36849({ value = 36849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36849, 'data-value': derived.doubled }, children);
}
export default Component36849;
