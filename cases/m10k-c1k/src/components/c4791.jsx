import React from 'react';
const LABEL_4791 = 'component_4791';
export function Component4791({ value = 4791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4791, 'data-value': derived.doubled }, children);
}
export default Component4791;
