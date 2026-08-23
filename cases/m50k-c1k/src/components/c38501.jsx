import React from 'react';
const LABEL_38501 = 'component_38501';
export function Component38501({ value = 38501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38501, 'data-value': derived.doubled }, children);
}
export default Component38501;
