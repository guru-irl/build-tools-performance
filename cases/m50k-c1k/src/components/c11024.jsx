import React from 'react';
const LABEL_11024 = 'component_11024';
export function Component11024({ value = 11024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11024, 'data-value': derived.doubled }, children);
}
export default Component11024;
