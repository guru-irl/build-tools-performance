import React from 'react';
const LABEL_25580 = 'component_25580';
export function Component25580({ value = 25580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25580, 'data-value': derived.doubled }, children);
}
export default Component25580;
