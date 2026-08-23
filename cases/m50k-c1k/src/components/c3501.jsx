import React from 'react';
const LABEL_3501 = 'component_3501';
export function Component3501({ value = 3501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3501, 'data-value': derived.doubled }, children);
}
export default Component3501;
