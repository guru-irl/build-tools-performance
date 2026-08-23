import React from 'react';
const LABEL_41568 = 'component_41568';
export function Component41568({ value = 41568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41568, 'data-value': derived.doubled }, children);
}
export default Component41568;
