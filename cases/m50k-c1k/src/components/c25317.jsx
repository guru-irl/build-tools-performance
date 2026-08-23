import React from 'react';
const LABEL_25317 = 'component_25317';
export function Component25317({ value = 25317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25317, 'data-value': derived.doubled }, children);
}
export default Component25317;
