import React from 'react';
const LABEL_14966 = 'component_14966';
export function Component14966({ value = 14966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14966, 'data-value': derived.doubled }, children);
}
export default Component14966;
