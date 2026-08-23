import React from 'react';
const LABEL_37825 = 'component_37825';
export function Component37825({ value = 37825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37825, 'data-value': derived.doubled }, children);
}
export default Component37825;
