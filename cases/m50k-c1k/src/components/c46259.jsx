import React from 'react';
const LABEL_46259 = 'component_46259';
export function Component46259({ value = 46259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46259, 'data-value': derived.doubled }, children);
}
export default Component46259;
