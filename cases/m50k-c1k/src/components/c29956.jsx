import React from 'react';
const LABEL_29956 = 'component_29956';
export function Component29956({ value = 29956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29956, 'data-value': derived.doubled }, children);
}
export default Component29956;
