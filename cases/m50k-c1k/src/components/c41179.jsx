import React from 'react';
const LABEL_41179 = 'component_41179';
export function Component41179({ value = 41179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41179, 'data-value': derived.doubled }, children);
}
export default Component41179;
