import React from 'react';
const LABEL_27621 = 'component_27621';
export function Component27621({ value = 27621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27621, 'data-value': derived.doubled }, children);
}
export default Component27621;
