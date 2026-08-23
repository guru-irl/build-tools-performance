import React from 'react';
const LABEL_34567 = 'component_34567';
export function Component34567({ value = 34567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34567, 'data-value': derived.doubled }, children);
}
export default Component34567;
