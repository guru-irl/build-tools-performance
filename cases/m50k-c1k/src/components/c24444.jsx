import React from 'react';
const LABEL_24444 = 'component_24444';
export function Component24444({ value = 24444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24444, 'data-value': derived.doubled }, children);
}
export default Component24444;
