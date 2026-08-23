import React from 'react';
const LABEL_13393 = 'component_13393';
export function Component13393({ value = 13393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13393, 'data-value': derived.doubled }, children);
}
export default Component13393;
