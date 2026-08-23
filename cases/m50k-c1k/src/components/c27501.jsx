import React from 'react';
const LABEL_27501 = 'component_27501';
export function Component27501({ value = 27501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27501, 'data-value': derived.doubled }, children);
}
export default Component27501;
