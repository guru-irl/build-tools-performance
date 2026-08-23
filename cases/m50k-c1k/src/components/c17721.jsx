import React from 'react';
const LABEL_17721 = 'component_17721';
export function Component17721({ value = 17721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17721, 'data-value': derived.doubled }, children);
}
export default Component17721;
