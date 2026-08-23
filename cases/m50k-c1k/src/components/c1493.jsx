import React from 'react';
const LABEL_1493 = 'component_1493';
export function Component1493({ value = 1493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1493, 'data-value': derived.doubled }, children);
}
export default Component1493;
