import React from 'react';
const LABEL_20259 = 'component_20259';
export function Component20259({ value = 20259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20259, 'data-value': derived.doubled }, children);
}
export default Component20259;
