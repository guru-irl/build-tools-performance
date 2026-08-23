import React from 'react';
const LABEL_37318 = 'component_37318';
export function Component37318({ value = 37318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37318, 'data-value': derived.doubled }, children);
}
export default Component37318;
