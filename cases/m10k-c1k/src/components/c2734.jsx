import React from 'react';
const LABEL_2734 = 'component_2734';
export function Component2734({ value = 2734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2734, 'data-value': derived.doubled }, children);
}
export default Component2734;
