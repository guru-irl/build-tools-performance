import React from 'react';
const LABEL_40425 = 'component_40425';
export function Component40425({ value = 40425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40425, 'data-value': derived.doubled }, children);
}
export default Component40425;
