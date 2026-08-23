import React from 'react';
const LABEL_18407 = 'component_18407';
export function Component18407({ value = 18407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18407, 'data-value': derived.doubled }, children);
}
export default Component18407;
