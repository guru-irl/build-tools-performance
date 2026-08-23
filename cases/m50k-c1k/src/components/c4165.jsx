import React from 'react';
const LABEL_4165 = 'component_4165';
export function Component4165({ value = 4165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4165, 'data-value': derived.doubled }, children);
}
export default Component4165;
