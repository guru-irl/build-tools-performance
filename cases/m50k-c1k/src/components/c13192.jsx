import React from 'react';
const LABEL_13192 = 'component_13192';
export function Component13192({ value = 13192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13192, 'data-value': derived.doubled }, children);
}
export default Component13192;
