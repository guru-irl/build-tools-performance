import React from 'react';
const LABEL_27492 = 'component_27492';
export function Component27492({ value = 27492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27492, 'data-value': derived.doubled }, children);
}
export default Component27492;
