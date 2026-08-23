import React from 'react';
const LABEL_2964 = 'component_2964';
export function Component2964({ value = 2964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2964, 'data-value': derived.doubled }, children);
}
export default Component2964;
