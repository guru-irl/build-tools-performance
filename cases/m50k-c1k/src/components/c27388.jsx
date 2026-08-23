import React from 'react';
const LABEL_27388 = 'component_27388';
export function Component27388({ value = 27388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27388, 'data-value': derived.doubled }, children);
}
export default Component27388;
