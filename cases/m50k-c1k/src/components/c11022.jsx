import React from 'react';
const LABEL_11022 = 'component_11022';
export function Component11022({ value = 11022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11022, 'data-value': derived.doubled }, children);
}
export default Component11022;
