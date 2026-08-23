import React from 'react';
const LABEL_41033 = 'component_41033';
export function Component41033({ value = 41033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41033, 'data-value': derived.doubled }, children);
}
export default Component41033;
