import React from 'react';
const LABEL_36136 = 'component_36136';
export function Component36136({ value = 36136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36136, 'data-value': derived.doubled }, children);
}
export default Component36136;
