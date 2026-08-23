import React from 'react';
const LABEL_38609 = 'component_38609';
export function Component38609({ value = 38609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38609, 'data-value': derived.doubled }, children);
}
export default Component38609;
