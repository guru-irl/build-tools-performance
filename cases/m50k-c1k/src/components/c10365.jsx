import React from 'react';
const LABEL_10365 = 'component_10365';
export function Component10365({ value = 10365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10365, 'data-value': derived.doubled }, children);
}
export default Component10365;
