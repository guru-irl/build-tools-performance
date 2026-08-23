import React from 'react';
const LABEL_29024 = 'component_29024';
export function Component29024({ value = 29024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29024, 'data-value': derived.doubled }, children);
}
export default Component29024;
