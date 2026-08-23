import React from 'react';
const LABEL_2486 = 'component_2486';
export function Component2486({ value = 2486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2486, 'data-value': derived.doubled }, children);
}
export default Component2486;
