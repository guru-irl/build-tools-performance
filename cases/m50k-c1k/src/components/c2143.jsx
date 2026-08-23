import React from 'react';
const LABEL_2143 = 'component_2143';
export function Component2143({ value = 2143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2143, 'data-value': derived.doubled }, children);
}
export default Component2143;
