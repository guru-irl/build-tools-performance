import React from 'react';
const LABEL_33005 = 'component_33005';
export function Component33005({ value = 33005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33005, 'data-value': derived.doubled }, children);
}
export default Component33005;
