import React from 'react';
const LABEL_15444 = 'component_15444';
export function Component15444({ value = 15444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15444, 'data-value': derived.doubled }, children);
}
export default Component15444;
