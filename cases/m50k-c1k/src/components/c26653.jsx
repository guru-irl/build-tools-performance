import React from 'react';
const LABEL_26653 = 'component_26653';
export function Component26653({ value = 26653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26653, 'data-value': derived.doubled }, children);
}
export default Component26653;
