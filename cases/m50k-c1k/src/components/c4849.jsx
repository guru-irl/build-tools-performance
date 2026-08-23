import React from 'react';
const LABEL_4849 = 'component_4849';
export function Component4849({ value = 4849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4849, 'data-value': derived.doubled }, children);
}
export default Component4849;
