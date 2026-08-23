import React from 'react';
const LABEL_25139 = 'component_25139';
export function Component25139({ value = 25139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25139, 'data-value': derived.doubled }, children);
}
export default Component25139;
