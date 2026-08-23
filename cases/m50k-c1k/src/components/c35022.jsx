import React from 'react';
const LABEL_35022 = 'component_35022';
export function Component35022({ value = 35022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35022, 'data-value': derived.doubled }, children);
}
export default Component35022;
