import React from 'react';
const LABEL_2501 = 'component_2501';
export function Component2501({ value = 2501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2501, 'data-value': derived.doubled }, children);
}
export default Component2501;
