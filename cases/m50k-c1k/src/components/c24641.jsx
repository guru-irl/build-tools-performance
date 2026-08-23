import React from 'react';
const LABEL_24641 = 'component_24641';
export function Component24641({ value = 24641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24641, 'data-value': derived.doubled }, children);
}
export default Component24641;
