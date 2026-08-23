import React from 'react';
const LABEL_10022 = 'component_10022';
export function Component10022({ value = 10022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10022, 'data-value': derived.doubled }, children);
}
export default Component10022;
