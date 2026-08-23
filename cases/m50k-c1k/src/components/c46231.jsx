import React from 'react';
const LABEL_46231 = 'component_46231';
export function Component46231({ value = 46231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46231, 'data-value': derived.doubled }, children);
}
export default Component46231;
