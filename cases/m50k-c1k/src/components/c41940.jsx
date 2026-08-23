import React from 'react';
const LABEL_41940 = 'component_41940';
export function Component41940({ value = 41940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41940, 'data-value': derived.doubled }, children);
}
export default Component41940;
