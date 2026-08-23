import React from 'react';
const LABEL_18228 = 'component_18228';
export function Component18228({ value = 18228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18228, 'data-value': derived.doubled }, children);
}
export default Component18228;
