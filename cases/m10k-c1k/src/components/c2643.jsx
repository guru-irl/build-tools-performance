import React from 'react';
const LABEL_2643 = 'component_2643';
export function Component2643({ value = 2643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2643, 'data-value': derived.doubled }, children);
}
export default Component2643;
