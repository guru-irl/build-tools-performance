import React from 'react';
const LABEL_41556 = 'component_41556';
export function Component41556({ value = 41556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41556, 'data-value': derived.doubled }, children);
}
export default Component41556;
