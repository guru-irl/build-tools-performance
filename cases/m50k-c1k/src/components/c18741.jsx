import React from 'react';
const LABEL_18741 = 'component_18741';
export function Component18741({ value = 18741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18741, 'data-value': derived.doubled }, children);
}
export default Component18741;
