import React from 'react';
const LABEL_41000 = 'component_41000';
export function Component41000({ value = 41000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41000, 'data-value': derived.doubled }, children);
}
export default Component41000;
