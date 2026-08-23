import React from 'react';
const LABEL_35567 = 'component_35567';
export function Component35567({ value = 35567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35567, 'data-value': derived.doubled }, children);
}
export default Component35567;
