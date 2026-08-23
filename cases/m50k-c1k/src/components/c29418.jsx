import React from 'react';
const LABEL_29418 = 'component_29418';
export function Component29418({ value = 29418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29418, 'data-value': derived.doubled }, children);
}
export default Component29418;
