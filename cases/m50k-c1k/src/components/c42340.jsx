import React from 'react';
const LABEL_42340 = 'component_42340';
export function Component42340({ value = 42340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42340, 'data-value': derived.doubled }, children);
}
export default Component42340;
