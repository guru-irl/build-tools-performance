import React from 'react';
const LABEL_18975 = 'component_18975';
export function Component18975({ value = 18975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18975, 'data-value': derived.doubled }, children);
}
export default Component18975;
