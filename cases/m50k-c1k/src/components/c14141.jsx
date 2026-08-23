import React from 'react';
const LABEL_14141 = 'component_14141';
export function Component14141({ value = 14141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14141, 'data-value': derived.doubled }, children);
}
export default Component14141;
