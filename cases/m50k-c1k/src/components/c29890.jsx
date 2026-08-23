import React from 'react';
const LABEL_29890 = 'component_29890';
export function Component29890({ value = 29890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29890, 'data-value': derived.doubled }, children);
}
export default Component29890;
