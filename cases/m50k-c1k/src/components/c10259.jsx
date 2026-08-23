import React from 'react';
const LABEL_10259 = 'component_10259';
export function Component10259({ value = 10259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10259, 'data-value': derived.doubled }, children);
}
export default Component10259;
