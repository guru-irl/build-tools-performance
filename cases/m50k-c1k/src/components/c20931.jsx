import React from 'react';
const LABEL_20931 = 'component_20931';
export function Component20931({ value = 20931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20931, 'data-value': derived.doubled }, children);
}
export default Component20931;
