import React from 'react';
const LABEL_29228 = 'component_29228';
export function Component29228({ value = 29228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29228, 'data-value': derived.doubled }, children);
}
export default Component29228;
