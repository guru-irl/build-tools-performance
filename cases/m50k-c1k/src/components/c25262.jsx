import React from 'react';
const LABEL_25262 = 'component_25262';
export function Component25262({ value = 25262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25262, 'data-value': derived.doubled }, children);
}
export default Component25262;
