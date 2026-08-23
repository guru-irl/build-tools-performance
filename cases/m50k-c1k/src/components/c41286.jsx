import React from 'react';
const LABEL_41286 = 'component_41286';
export function Component41286({ value = 41286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41286, 'data-value': derived.doubled }, children);
}
export default Component41286;
