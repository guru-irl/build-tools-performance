import React from 'react';
const LABEL_10403 = 'component_10403';
export function Component10403({ value = 10403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10403, 'data-value': derived.doubled }, children);
}
export default Component10403;
