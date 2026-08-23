import React from 'react';
const LABEL_36547 = 'component_36547';
export function Component36547({ value = 36547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36547, 'data-value': derived.doubled }, children);
}
export default Component36547;
