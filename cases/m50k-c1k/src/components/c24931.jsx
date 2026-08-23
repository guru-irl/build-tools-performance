import React from 'react';
const LABEL_24931 = 'component_24931';
export function Component24931({ value = 24931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24931, 'data-value': derived.doubled }, children);
}
export default Component24931;
