import React from 'react';
const LABEL_26444 = 'component_26444';
export function Component26444({ value = 26444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26444, 'data-value': derived.doubled }, children);
}
export default Component26444;
