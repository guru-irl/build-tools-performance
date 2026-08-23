import React from 'react';
const LABEL_6952 = 'component_6952';
export function Component6952({ value = 6952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6952, 'data-value': derived.doubled }, children);
}
export default Component6952;
