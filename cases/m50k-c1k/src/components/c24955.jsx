import React from 'react';
const LABEL_24955 = 'component_24955';
export function Component24955({ value = 24955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24955, 'data-value': derived.doubled }, children);
}
export default Component24955;
