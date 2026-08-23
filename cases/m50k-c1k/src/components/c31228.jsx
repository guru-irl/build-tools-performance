import React from 'react';
const LABEL_31228 = 'component_31228';
export function Component31228({ value = 31228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31228, 'data-value': derived.doubled }, children);
}
export default Component31228;
