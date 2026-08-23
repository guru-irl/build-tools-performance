import React from 'react';
const LABEL_18022 = 'component_18022';
export function Component18022({ value = 18022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18022, 'data-value': derived.doubled }, children);
}
export default Component18022;
