import React from 'react';
const LABEL_27099 = 'component_27099';
export function Component27099({ value = 27099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27099, 'data-value': derived.doubled }, children);
}
export default Component27099;
