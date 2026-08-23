import React from 'react';
const LABEL_13024 = 'component_13024';
export function Component13024({ value = 13024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13024, 'data-value': derived.doubled }, children);
}
export default Component13024;
