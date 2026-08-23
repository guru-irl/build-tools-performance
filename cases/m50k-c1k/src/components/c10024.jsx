import React from 'react';
const LABEL_10024 = 'component_10024';
export function Component10024({ value = 10024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10024, 'data-value': derived.doubled }, children);
}
export default Component10024;
