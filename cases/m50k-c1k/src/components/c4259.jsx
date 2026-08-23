import React from 'react';
const LABEL_4259 = 'component_4259';
export function Component4259({ value = 4259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4259, 'data-value': derived.doubled }, children);
}
export default Component4259;
