import React from 'react';
const LABEL_24195 = 'component_24195';
export function Component24195({ value = 24195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24195, 'data-value': derived.doubled }, children);
}
export default Component24195;
