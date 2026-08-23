import React from 'react';
const LABEL_40931 = 'component_40931';
export function Component40931({ value = 40931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40931, 'data-value': derived.doubled }, children);
}
export default Component40931;
