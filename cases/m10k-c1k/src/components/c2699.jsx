import React from 'react';
const LABEL_2699 = 'component_2699';
export function Component2699({ value = 2699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2699, 'data-value': derived.doubled }, children);
}
export default Component2699;
