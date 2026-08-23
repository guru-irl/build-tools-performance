import React from 'react';
const LABEL_46024 = 'component_46024';
export function Component46024({ value = 46024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46024, 'data-value': derived.doubled }, children);
}
export default Component46024;
