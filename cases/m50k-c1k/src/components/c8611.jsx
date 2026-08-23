import React from 'react';
const LABEL_8611 = 'component_8611';
export function Component8611({ value = 8611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8611, 'data-value': derived.doubled }, children);
}
export default Component8611;
