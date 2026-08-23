import React from 'react';
const LABEL_41078 = 'component_41078';
export function Component41078({ value = 41078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41078, 'data-value': derived.doubled }, children);
}
export default Component41078;
