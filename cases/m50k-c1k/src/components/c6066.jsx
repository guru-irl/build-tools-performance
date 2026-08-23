import React from 'react';
const LABEL_6066 = 'component_6066';
export function Component6066({ value = 6066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6066, 'data-value': derived.doubled }, children);
}
export default Component6066;
