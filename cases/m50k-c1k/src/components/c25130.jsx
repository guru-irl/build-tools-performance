import React from 'react';
const LABEL_25130 = 'component_25130';
export function Component25130({ value = 25130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25130, 'data-value': derived.doubled }, children);
}
export default Component25130;
