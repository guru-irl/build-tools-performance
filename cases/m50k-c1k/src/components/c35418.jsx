import React from 'react';
const LABEL_35418 = 'component_35418';
export function Component35418({ value = 35418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35418, 'data-value': derived.doubled }, children);
}
export default Component35418;
