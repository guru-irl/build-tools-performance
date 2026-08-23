import React from 'react';
const LABEL_27472 = 'component_27472';
export function Component27472({ value = 27472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27472, 'data-value': derived.doubled }, children);
}
export default Component27472;
