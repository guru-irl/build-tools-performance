import React from 'react';
const LABEL_27205 = 'component_27205';
export function Component27205({ value = 27205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27205, 'data-value': derived.doubled }, children);
}
export default Component27205;
