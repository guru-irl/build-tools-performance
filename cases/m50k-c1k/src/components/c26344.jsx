import React from 'react';
const LABEL_26344 = 'component_26344';
export function Component26344({ value = 26344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26344, 'data-value': derived.doubled }, children);
}
export default Component26344;
