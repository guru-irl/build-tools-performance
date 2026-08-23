import React from 'react';
const LABEL_2302 = 'component_2302';
export function Component2302({ value = 2302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2302, 'data-value': derived.doubled }, children);
}
export default Component2302;
