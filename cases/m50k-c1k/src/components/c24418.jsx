import React from 'react';
const LABEL_24418 = 'component_24418';
export function Component24418({ value = 24418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24418, 'data-value': derived.doubled }, children);
}
export default Component24418;
