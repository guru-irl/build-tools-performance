import React from 'react';
const LABEL_41338 = 'component_41338';
export function Component41338({ value = 41338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41338, 'data-value': derived.doubled }, children);
}
export default Component41338;
