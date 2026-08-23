import React from 'react';
const LABEL_41802 = 'component_41802';
export function Component41802({ value = 41802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41802, 'data-value': derived.doubled }, children);
}
export default Component41802;
