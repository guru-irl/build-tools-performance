import React from 'react';
const LABEL_41668 = 'component_41668';
export function Component41668({ value = 41668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41668, 'data-value': derived.doubled }, children);
}
export default Component41668;
