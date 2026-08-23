import React from 'react';
const LABEL_20024 = 'component_20024';
export function Component20024({ value = 20024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20024, 'data-value': derived.doubled }, children);
}
export default Component20024;
