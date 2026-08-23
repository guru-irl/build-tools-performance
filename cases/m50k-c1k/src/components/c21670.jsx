import React from 'react';
const LABEL_21670 = 'component_21670';
export function Component21670({ value = 21670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21670, 'data-value': derived.doubled }, children);
}
export default Component21670;
