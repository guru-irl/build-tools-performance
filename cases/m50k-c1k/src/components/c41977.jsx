import React from 'react';
const LABEL_41977 = 'component_41977';
export function Component41977({ value = 41977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41977, 'data-value': derived.doubled }, children);
}
export default Component41977;
