import React from 'react';
const LABEL_33024 = 'component_33024';
export function Component33024({ value = 33024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33024, 'data-value': derived.doubled }, children);
}
export default Component33024;
