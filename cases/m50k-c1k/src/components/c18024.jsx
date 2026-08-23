import React from 'react';
const LABEL_18024 = 'component_18024';
export function Component18024({ value = 18024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18024, 'data-value': derived.doubled }, children);
}
export default Component18024;
