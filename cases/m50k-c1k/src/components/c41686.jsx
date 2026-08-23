import React from 'react';
const LABEL_41686 = 'component_41686';
export function Component41686({ value = 41686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41686, 'data-value': derived.doubled }, children);
}
export default Component41686;
