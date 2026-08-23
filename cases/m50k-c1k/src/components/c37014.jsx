import React from 'react';
const LABEL_37014 = 'component_37014';
export function Component37014({ value = 37014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37014, 'data-value': derived.doubled }, children);
}
export default Component37014;
