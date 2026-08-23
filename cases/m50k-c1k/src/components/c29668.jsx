import React from 'react';
const LABEL_29668 = 'component_29668';
export function Component29668({ value = 29668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29668, 'data-value': derived.doubled }, children);
}
export default Component29668;
