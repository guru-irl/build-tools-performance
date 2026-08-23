import React from 'react';
const LABEL_2017 = 'component_2017';
export function Component2017({ value = 2017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2017, 'data-value': derived.doubled }, children);
}
export default Component2017;
