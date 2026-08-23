import React from 'react';
const LABEL_27404 = 'component_27404';
export function Component27404({ value = 27404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27404, 'data-value': derived.doubled }, children);
}
export default Component27404;
