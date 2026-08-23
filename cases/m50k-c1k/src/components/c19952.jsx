import React from 'react';
const LABEL_19952 = 'component_19952';
export function Component19952({ value = 19952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19952, 'data-value': derived.doubled }, children);
}
export default Component19952;
