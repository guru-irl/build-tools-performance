import React from 'react';
const LABEL_40501 = 'component_40501';
export function Component40501({ value = 40501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40501, 'data-value': derived.doubled }, children);
}
export default Component40501;
