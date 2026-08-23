import React from 'react';
const LABEL_22024 = 'component_22024';
export function Component22024({ value = 22024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22024, 'data-value': derived.doubled }, children);
}
export default Component22024;
