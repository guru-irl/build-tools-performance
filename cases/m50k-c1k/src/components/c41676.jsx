import React from 'react';
const LABEL_41676 = 'component_41676';
export function Component41676({ value = 41676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41676, 'data-value': derived.doubled }, children);
}
export default Component41676;
