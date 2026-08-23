import React from 'react';
const LABEL_36010 = 'component_36010';
export function Component36010({ value = 36010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36010, 'data-value': derived.doubled }, children);
}
export default Component36010;
