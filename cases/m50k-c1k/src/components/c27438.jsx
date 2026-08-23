import React from 'react';
const LABEL_27438 = 'component_27438';
export function Component27438({ value = 27438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27438, 'data-value': derived.doubled }, children);
}
export default Component27438;
