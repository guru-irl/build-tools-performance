import React from 'react';
const LABEL_44383 = 'component_44383';
export function Component44383({ value = 44383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44383, 'data-value': derived.doubled }, children);
}
export default Component44383;
