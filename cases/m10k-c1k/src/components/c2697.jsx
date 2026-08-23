import React from 'react';
const LABEL_2697 = 'component_2697';
export function Component2697({ value = 2697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2697, 'data-value': derived.doubled }, children);
}
export default Component2697;
