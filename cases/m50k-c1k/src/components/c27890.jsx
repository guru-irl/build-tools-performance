import React from 'react';
const LABEL_27890 = 'component_27890';
export function Component27890({ value = 27890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27890, 'data-value': derived.doubled }, children);
}
export default Component27890;
