import React from 'react';
const LABEL_2931 = 'component_2931';
export function Component2931({ value = 2931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2931, 'data-value': derived.doubled }, children);
}
export default Component2931;
