import React from 'react';
const LABEL_25418 = 'component_25418';
export function Component25418({ value = 25418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25418, 'data-value': derived.doubled }, children);
}
export default Component25418;
