import React from 'react';
const LABEL_24019 = 'component_24019';
export function Component24019({ value = 24019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24019, 'data-value': derived.doubled }, children);
}
export default Component24019;
