import React from 'react';
const LABEL_46505 = 'component_46505';
export function Component46505({ value = 46505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46505, 'data-value': derived.doubled }, children);
}
export default Component46505;
