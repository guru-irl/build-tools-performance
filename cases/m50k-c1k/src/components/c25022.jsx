import React from 'react';
const LABEL_25022 = 'component_25022';
export function Component25022({ value = 25022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25022, 'data-value': derived.doubled }, children);
}
export default Component25022;
