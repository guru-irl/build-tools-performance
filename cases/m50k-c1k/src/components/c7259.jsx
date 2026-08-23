import React from 'react';
const LABEL_7259 = 'component_7259';
export function Component7259({ value = 7259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7259, 'data-value': derived.doubled }, children);
}
export default Component7259;
