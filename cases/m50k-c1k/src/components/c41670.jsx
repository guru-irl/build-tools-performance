import React from 'react';
const LABEL_41670 = 'component_41670';
export function Component41670({ value = 41670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41670, 'data-value': derived.doubled }, children);
}
export default Component41670;
