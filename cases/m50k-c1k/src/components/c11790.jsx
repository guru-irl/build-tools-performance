import React from 'react';
const LABEL_11790 = 'component_11790';
export function Component11790({ value = 11790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11790, 'data-value': derived.doubled }, children);
}
export default Component11790;
