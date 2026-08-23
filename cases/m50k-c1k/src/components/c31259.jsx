import React from 'react';
const LABEL_31259 = 'component_31259';
export function Component31259({ value = 31259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31259, 'data-value': derived.doubled }, children);
}
export default Component31259;
