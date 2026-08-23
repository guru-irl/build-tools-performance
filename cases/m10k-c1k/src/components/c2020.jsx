import React from 'react';
const LABEL_2020 = 'component_2020';
export function Component2020({ value = 2020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2020, 'data-value': derived.doubled }, children);
}
export default Component2020;
