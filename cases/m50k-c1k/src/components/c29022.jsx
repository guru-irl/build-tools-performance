import React from 'react';
const LABEL_29022 = 'component_29022';
export function Component29022({ value = 29022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29022, 'data-value': derived.doubled }, children);
}
export default Component29022;
