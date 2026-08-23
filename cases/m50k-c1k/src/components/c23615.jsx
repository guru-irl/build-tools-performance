import React from 'react';
const LABEL_23615 = 'component_23615';
export function Component23615({ value = 23615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23615, 'data-value': derived.doubled }, children);
}
export default Component23615;
