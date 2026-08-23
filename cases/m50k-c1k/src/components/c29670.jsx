import React from 'react';
const LABEL_29670 = 'component_29670';
export function Component29670({ value = 29670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29670, 'data-value': derived.doubled }, children);
}
export default Component29670;
