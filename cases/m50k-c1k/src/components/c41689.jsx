import React from 'react';
const LABEL_41689 = 'component_41689';
export function Component41689({ value = 41689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41689, 'data-value': derived.doubled }, children);
}
export default Component41689;
