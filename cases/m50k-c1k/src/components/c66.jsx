import React from 'react';
const LABEL_66 = 'component_66';
export function Component66({ value = 66, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_66, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_66, 'data-value': derived.doubled }, children);
}
export default Component66;
