import React from 'react';
const LABEL_41473 = 'component_41473';
export function Component41473({ value = 41473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41473, 'data-value': derived.doubled }, children);
}
export default Component41473;
