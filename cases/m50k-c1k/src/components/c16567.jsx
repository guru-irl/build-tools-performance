import React from 'react';
const LABEL_16567 = 'component_16567';
export function Component16567({ value = 16567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16567, 'data-value': derived.doubled }, children);
}
export default Component16567;
