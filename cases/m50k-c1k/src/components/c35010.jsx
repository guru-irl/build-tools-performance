import React from 'react';
const LABEL_35010 = 'component_35010';
export function Component35010({ value = 35010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35010, 'data-value': derived.doubled }, children);
}
export default Component35010;
