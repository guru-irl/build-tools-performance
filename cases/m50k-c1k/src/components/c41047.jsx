import React from 'react';
const LABEL_41047 = 'component_41047';
export function Component41047({ value = 41047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41047, 'data-value': derived.doubled }, children);
}
export default Component41047;
