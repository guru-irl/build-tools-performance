import React from 'react';
const LABEL_7010 = 'component_7010';
export function Component7010({ value = 7010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7010, 'data-value': derived.doubled }, children);
}
export default Component7010;
