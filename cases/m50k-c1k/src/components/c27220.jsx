import React from 'react';
const LABEL_27220 = 'component_27220';
export function Component27220({ value = 27220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27220, 'data-value': derived.doubled }, children);
}
export default Component27220;
