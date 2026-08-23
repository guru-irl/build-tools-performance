import React from 'react';
const LABEL_25444 = 'component_25444';
export function Component25444({ value = 25444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25444, 'data-value': derived.doubled }, children);
}
export default Component25444;
