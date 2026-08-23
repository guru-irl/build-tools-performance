import React from 'react';
const LABEL_33082 = 'component_33082';
export function Component33082({ value = 33082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33082, 'data-value': derived.doubled }, children);
}
export default Component33082;
