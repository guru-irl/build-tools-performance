import React from 'react';
const LABEL_41842 = 'component_41842';
export function Component41842({ value = 41842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41842, 'data-value': derived.doubled }, children);
}
export default Component41842;
