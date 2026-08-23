import React from 'react';
const LABEL_15017 = 'component_15017';
export function Component15017({ value = 15017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15017, 'data-value': derived.doubled }, children);
}
export default Component15017;
