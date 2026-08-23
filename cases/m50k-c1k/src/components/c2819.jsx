import React from 'react';
const LABEL_2819 = 'component_2819';
export function Component2819({ value = 2819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2819, 'data-value': derived.doubled }, children);
}
export default Component2819;
