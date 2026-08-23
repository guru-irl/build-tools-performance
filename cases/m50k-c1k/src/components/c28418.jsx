import React from 'react';
const LABEL_28418 = 'component_28418';
export function Component28418({ value = 28418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28418, 'data-value': derived.doubled }, children);
}
export default Component28418;
