import React from 'react';
const LABEL_38259 = 'component_38259';
export function Component38259({ value = 38259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38259, 'data-value': derived.doubled }, children);
}
export default Component38259;
