import React from 'react';
const LABEL_10567 = 'component_10567';
export function Component10567({ value = 10567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10567, 'data-value': derived.doubled }, children);
}
export default Component10567;
