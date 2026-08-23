import React from 'react';
const LABEL_42468 = 'component_42468';
export function Component42468({ value = 42468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42468, 'data-value': derived.doubled }, children);
}
export default Component42468;
