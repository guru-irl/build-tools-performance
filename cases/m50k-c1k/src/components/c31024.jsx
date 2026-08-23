import React from 'react';
const LABEL_31024 = 'component_31024';
export function Component31024({ value = 31024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31024, 'data-value': derived.doubled }, children);
}
export default Component31024;
