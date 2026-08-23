import React from 'react';
const LABEL_2019 = 'component_2019';
export function Component2019({ value = 2019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2019, 'data-value': derived.doubled }, children);
}
export default Component2019;
