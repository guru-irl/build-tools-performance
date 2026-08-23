import React from 'react';
const LABEL_27304 = 'component_27304';
export function Component27304({ value = 27304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27304, 'data-value': derived.doubled }, children);
}
export default Component27304;
