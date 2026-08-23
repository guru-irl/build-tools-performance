import React from 'react';
const LABEL_27963 = 'component_27963';
export function Component27963({ value = 27963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27963, 'data-value': derived.doubled }, children);
}
export default Component27963;
