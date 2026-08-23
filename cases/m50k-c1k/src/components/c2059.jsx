import React from 'react';
const LABEL_2059 = 'component_2059';
export function Component2059({ value = 2059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2059, 'data-value': derived.doubled }, children);
}
export default Component2059;
