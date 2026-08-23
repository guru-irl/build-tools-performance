import React from 'react';
const LABEL_41204 = 'component_41204';
export function Component41204({ value = 41204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41204, 'data-value': derived.doubled }, children);
}
export default Component41204;
