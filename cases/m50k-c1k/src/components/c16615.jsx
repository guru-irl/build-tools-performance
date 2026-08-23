import React from 'react';
const LABEL_16615 = 'component_16615';
export function Component16615({ value = 16615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16615, 'data-value': derived.doubled }, children);
}
export default Component16615;
