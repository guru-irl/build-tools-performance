import React from 'react';
const LABEL_27732 = 'component_27732';
export function Component27732({ value = 27732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27732, 'data-value': derived.doubled }, children);
}
export default Component27732;
