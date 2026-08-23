import React from 'react';
const LABEL_25313 = 'component_25313';
export function Component25313({ value = 25313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25313, 'data-value': derived.doubled }, children);
}
export default Component25313;
