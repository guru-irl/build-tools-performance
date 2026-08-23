import React from 'react';
const LABEL_2993 = 'component_2993';
export function Component2993({ value = 2993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2993, 'data-value': derived.doubled }, children);
}
export default Component2993;
