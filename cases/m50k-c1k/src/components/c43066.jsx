import React from 'react';
const LABEL_43066 = 'component_43066';
export function Component43066({ value = 43066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43066, 'data-value': derived.doubled }, children);
}
export default Component43066;
