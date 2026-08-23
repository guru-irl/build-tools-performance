import React from 'react';
const LABEL_6024 = 'component_6024';
export function Component6024({ value = 6024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6024, 'data-value': derived.doubled }, children);
}
export default Component6024;
