import React from 'react';
const LABEL_28615 = 'component_28615';
export function Component28615({ value = 28615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28615, 'data-value': derived.doubled }, children);
}
export default Component28615;
