import React from 'react';
const LABEL_6917 = 'component_6917';
export function Component6917({ value = 6917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6917, 'data-value': derived.doubled }, children);
}
export default Component6917;
