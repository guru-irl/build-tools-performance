import React from 'react';
const LABEL_13718 = 'component_13718';
export function Component13718({ value = 13718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13718, 'data-value': derived.doubled }, children);
}
export default Component13718;
