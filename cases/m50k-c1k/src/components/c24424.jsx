import React from 'react';
const LABEL_24424 = 'component_24424';
export function Component24424({ value = 24424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24424, 'data-value': derived.doubled }, children);
}
export default Component24424;
