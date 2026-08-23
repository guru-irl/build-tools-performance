import React from 'react';
const LABEL_21567 = 'component_21567';
export function Component21567({ value = 21567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21567, 'data-value': derived.doubled }, children);
}
export default Component21567;
