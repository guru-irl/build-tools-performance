import React from 'react';
const LABEL_25903 = 'component_25903';
export function Component25903({ value = 25903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25903, 'data-value': derived.doubled }, children);
}
export default Component25903;
