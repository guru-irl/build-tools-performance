import React from 'react';
const LABEL_36022 = 'component_36022';
export function Component36022({ value = 36022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36022, 'data-value': derived.doubled }, children);
}
export default Component36022;
