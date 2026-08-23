import React from 'react';
const LABEL_7418 = 'component_7418';
export function Component7418({ value = 7418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7418, 'data-value': derived.doubled }, children);
}
export default Component7418;
