import React from 'react';
const LABEL_27651 = 'component_27651';
export function Component27651({ value = 27651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27651, 'data-value': derived.doubled }, children);
}
export default Component27651;
