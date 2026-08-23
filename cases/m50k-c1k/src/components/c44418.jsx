import React from 'react';
const LABEL_44418 = 'component_44418';
export function Component44418({ value = 44418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44418, 'data-value': derived.doubled }, children);
}
export default Component44418;
