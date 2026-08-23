import React from 'react';
const LABEL_37365 = 'component_37365';
export function Component37365({ value = 37365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37365, 'data-value': derived.doubled }, children);
}
export default Component37365;
