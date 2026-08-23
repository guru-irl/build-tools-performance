import React from 'react';
const LABEL_45259 = 'component_45259';
export function Component45259({ value = 45259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45259, 'data-value': derived.doubled }, children);
}
export default Component45259;
