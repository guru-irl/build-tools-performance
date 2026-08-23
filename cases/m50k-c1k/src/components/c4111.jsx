import React from 'react';
const LABEL_4111 = 'component_4111';
export function Component4111({ value = 4111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4111, 'data-value': derived.doubled }, children);
}
export default Component4111;
