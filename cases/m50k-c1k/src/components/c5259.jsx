import React from 'react';
const LABEL_5259 = 'component_5259';
export function Component5259({ value = 5259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5259, 'data-value': derived.doubled }, children);
}
export default Component5259;
