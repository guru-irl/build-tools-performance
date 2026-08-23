import React from 'react';
const LABEL_23024 = 'component_23024';
export function Component23024({ value = 23024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23024, 'data-value': derived.doubled }, children);
}
export default Component23024;
