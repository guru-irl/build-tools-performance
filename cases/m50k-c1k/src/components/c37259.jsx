import React from 'react';
const LABEL_37259 = 'component_37259';
export function Component37259({ value = 37259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37259, 'data-value': derived.doubled }, children);
}
export default Component37259;
