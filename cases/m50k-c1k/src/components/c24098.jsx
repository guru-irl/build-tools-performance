import React from 'react';
const LABEL_24098 = 'component_24098';
export function Component24098({ value = 24098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24098, 'data-value': derived.doubled }, children);
}
export default Component24098;
