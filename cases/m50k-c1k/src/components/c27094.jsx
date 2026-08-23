import React from 'react';
const LABEL_27094 = 'component_27094';
export function Component27094({ value = 27094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27094, 'data-value': derived.doubled }, children);
}
export default Component27094;
