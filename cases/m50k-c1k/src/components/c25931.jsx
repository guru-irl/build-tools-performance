import React from 'react';
const LABEL_25931 = 'component_25931';
export function Component25931({ value = 25931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25931, 'data-value': derived.doubled }, children);
}
export default Component25931;
