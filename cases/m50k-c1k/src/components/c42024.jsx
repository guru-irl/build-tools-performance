import React from 'react';
const LABEL_42024 = 'component_42024';
export function Component42024({ value = 42024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42024, 'data-value': derived.doubled }, children);
}
export default Component42024;
