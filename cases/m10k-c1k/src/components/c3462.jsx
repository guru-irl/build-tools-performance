import React from 'react';
const LABEL_3462 = 'component_3462';
export function Component3462({ value = 3462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3462, 'data-value': derived.doubled }, children);
}
export default Component3462;
