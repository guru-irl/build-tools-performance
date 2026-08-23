import React from 'react';
const LABEL_43315 = 'component_43315';
export function Component43315({ value = 43315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43315, 'data-value': derived.doubled }, children);
}
export default Component43315;
