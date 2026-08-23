import React from 'react';
const LABEL_3010 = 'component_3010';
export function Component3010({ value = 3010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3010, 'data-value': derived.doubled }, children);
}
export default Component3010;
