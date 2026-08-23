import React from 'react';
const LABEL_2814 = 'component_2814';
export function Component2814({ value = 2814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2814, 'data-value': derived.doubled }, children);
}
export default Component2814;
