import React from 'react';
const LABEL_32849 = 'component_32849';
export function Component32849({ value = 32849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32849, 'data-value': derived.doubled }, children);
}
export default Component32849;
