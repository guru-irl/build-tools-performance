import React from 'react';
const LABEL_13066 = 'component_13066';
export function Component13066({ value = 13066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13066, 'data-value': derived.doubled }, children);
}
export default Component13066;
