import React from 'react';
const LABEL_7440 = 'component_7440';
export function Component7440({ value = 7440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7440, 'data-value': derived.doubled }, children);
}
export default Component7440;
