import React from 'react';
const LABEL_41725 = 'component_41725';
export function Component41725({ value = 41725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41725, 'data-value': derived.doubled }, children);
}
export default Component41725;
