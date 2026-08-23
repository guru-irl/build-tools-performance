import React from 'react';
const LABEL_41248 = 'component_41248';
export function Component41248({ value = 41248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41248, 'data-value': derived.doubled }, children);
}
export default Component41248;
