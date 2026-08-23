import React from 'react';
const LABEL_46370 = 'component_46370';
export function Component46370({ value = 46370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46370, 'data-value': derived.doubled }, children);
}
export default Component46370;
