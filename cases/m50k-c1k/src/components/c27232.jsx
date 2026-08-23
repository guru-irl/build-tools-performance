import React from 'react';
const LABEL_27232 = 'component_27232';
export function Component27232({ value = 27232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27232, 'data-value': derived.doubled }, children);
}
export default Component27232;
