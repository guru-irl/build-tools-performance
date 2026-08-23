import React from 'react';
const LABEL_41020 = 'component_41020';
export function Component41020({ value = 41020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41020, 'data-value': derived.doubled }, children);
}
export default Component41020;
