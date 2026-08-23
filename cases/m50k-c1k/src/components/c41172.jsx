import React from 'react';
const LABEL_41172 = 'component_41172';
export function Component41172({ value = 41172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41172, 'data-value': derived.doubled }, children);
}
export default Component41172;
