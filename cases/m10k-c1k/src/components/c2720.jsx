import React from 'react';
const LABEL_2720 = 'component_2720';
export function Component2720({ value = 2720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2720, 'data-value': derived.doubled }, children);
}
export default Component2720;
