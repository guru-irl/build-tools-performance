import React from 'react';
const LABEL_24223 = 'component_24223';
export function Component24223({ value = 24223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24223, 'data-value': derived.doubled }, children);
}
export default Component24223;
