import React from 'react';
const LABEL_25908 = 'component_25908';
export function Component25908({ value = 25908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25908, 'data-value': derived.doubled }, children);
}
export default Component25908;
