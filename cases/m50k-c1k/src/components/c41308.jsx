import React from 'react';
const LABEL_41308 = 'component_41308';
export function Component41308({ value = 41308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41308, 'data-value': derived.doubled }, children);
}
export default Component41308;
