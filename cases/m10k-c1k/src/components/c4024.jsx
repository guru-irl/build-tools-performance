import React from 'react';
const LABEL_4024 = 'component_4024';
export function Component4024({ value = 4024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4024, 'data-value': derived.doubled }, children);
}
export default Component4024;
