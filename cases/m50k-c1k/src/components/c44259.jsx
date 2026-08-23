import React from 'react';
const LABEL_44259 = 'component_44259';
export function Component44259({ value = 44259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44259, 'data-value': derived.doubled }, children);
}
export default Component44259;
