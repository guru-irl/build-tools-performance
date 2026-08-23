import React from 'react';
const LABEL_41130 = 'component_41130';
export function Component41130({ value = 41130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41130, 'data-value': derived.doubled }, children);
}
export default Component41130;
