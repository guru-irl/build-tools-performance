import React from 'react';
const LABEL_41169 = 'component_41169';
export function Component41169({ value = 41169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41169, 'data-value': derived.doubled }, children);
}
export default Component41169;
