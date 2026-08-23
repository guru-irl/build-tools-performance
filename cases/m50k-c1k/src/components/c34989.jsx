import React from 'react';
const LABEL_34989 = 'component_34989';
export function Component34989({ value = 34989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34989, 'data-value': derived.doubled }, children);
}
export default Component34989;
