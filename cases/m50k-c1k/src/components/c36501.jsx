import React from 'react';
const LABEL_36501 = 'component_36501';
export function Component36501({ value = 36501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36501, 'data-value': derived.doubled }, children);
}
export default Component36501;
