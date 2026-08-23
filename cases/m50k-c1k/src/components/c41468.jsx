import React from 'react';
const LABEL_41468 = 'component_41468';
export function Component41468({ value = 41468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41468, 'data-value': derived.doubled }, children);
}
export default Component41468;
