import React from 'react';
const LABEL_7567 = 'component_7567';
export function Component7567({ value = 7567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7567, 'data-value': derived.doubled }, children);
}
export default Component7567;
