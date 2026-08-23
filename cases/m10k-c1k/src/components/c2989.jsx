import React from 'react';
const LABEL_2989 = 'component_2989';
export function Component2989({ value = 2989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2989, 'data-value': derived.doubled }, children);
}
export default Component2989;
