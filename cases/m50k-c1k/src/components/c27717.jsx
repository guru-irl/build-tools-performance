import React from 'react';
const LABEL_27717 = 'component_27717';
export function Component27717({ value = 27717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27717, 'data-value': derived.doubled }, children);
}
export default Component27717;
