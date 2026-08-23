import React from 'react';
const LABEL_34741 = 'component_34741';
export function Component34741({ value = 34741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34741, 'data-value': derived.doubled }, children);
}
export default Component34741;
