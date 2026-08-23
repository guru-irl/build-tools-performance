import React from 'react';
const LABEL_28301 = 'component_28301';
export function Component28301({ value = 28301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28301, 'data-value': derived.doubled }, children);
}
export default Component28301;
