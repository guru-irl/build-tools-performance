import React from 'react';
const LABEL_41141 = 'component_41141';
export function Component41141({ value = 41141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41141, 'data-value': derived.doubled }, children);
}
export default Component41141;
