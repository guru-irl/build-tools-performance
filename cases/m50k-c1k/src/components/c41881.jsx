import React from 'react';
const LABEL_41881 = 'component_41881';
export function Component41881({ value = 41881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41881, 'data-value': derived.doubled }, children);
}
export default Component41881;
