import React from 'react';
const LABEL_25082 = 'component_25082';
export function Component25082({ value = 25082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25082, 'data-value': derived.doubled }, children);
}
export default Component25082;
