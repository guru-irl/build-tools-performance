import React from 'react';
const LABEL_2224 = 'component_2224';
export function Component2224({ value = 2224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2224, 'data-value': derived.doubled }, children);
}
export default Component2224;
