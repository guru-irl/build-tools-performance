import React from 'react';
const LABEL_24998 = 'component_24998';
export function Component24998({ value = 24998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24998, 'data-value': derived.doubled }, children);
}
export default Component24998;
