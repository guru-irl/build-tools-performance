import React from 'react';
const LABEL_4968 = 'component_4968';
export function Component4968({ value = 4968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4968, 'data-value': derived.doubled }, children);
}
export default Component4968;
