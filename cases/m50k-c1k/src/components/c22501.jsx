import React from 'react';
const LABEL_22501 = 'component_22501';
export function Component22501({ value = 22501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22501, 'data-value': derived.doubled }, children);
}
export default Component22501;
