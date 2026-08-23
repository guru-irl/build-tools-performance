import React from 'react';
const LABEL_2265 = 'component_2265';
export function Component2265({ value = 2265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2265, 'data-value': derived.doubled }, children);
}
export default Component2265;
