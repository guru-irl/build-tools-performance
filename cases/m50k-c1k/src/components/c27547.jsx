import React from 'react';
const LABEL_27547 = 'component_27547';
export function Component27547({ value = 27547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27547, 'data-value': derived.doubled }, children);
}
export default Component27547;
