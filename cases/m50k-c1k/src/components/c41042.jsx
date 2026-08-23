import React from 'react';
const LABEL_41042 = 'component_41042';
export function Component41042({ value = 41042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41042, 'data-value': derived.doubled }, children);
}
export default Component41042;
