import React from 'react';
const LABEL_24944 = 'component_24944';
export function Component24944({ value = 24944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24944, 'data-value': derived.doubled }, children);
}
export default Component24944;
