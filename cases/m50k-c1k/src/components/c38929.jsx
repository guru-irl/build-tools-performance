import React from 'react';
const LABEL_38929 = 'component_38929';
export function Component38929({ value = 38929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38929, 'data-value': derived.doubled }, children);
}
export default Component38929;
