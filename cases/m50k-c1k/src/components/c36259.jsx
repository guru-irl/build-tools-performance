import React from 'react';
const LABEL_36259 = 'component_36259';
export function Component36259({ value = 36259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36259, 'data-value': derived.doubled }, children);
}
export default Component36259;
