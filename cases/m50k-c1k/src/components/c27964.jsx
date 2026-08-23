import React from 'react';
const LABEL_27964 = 'component_27964';
export function Component27964({ value = 27964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27964, 'data-value': derived.doubled }, children);
}
export default Component27964;
