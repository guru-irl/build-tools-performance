import React from 'react';
const LABEL_16952 = 'component_16952';
export function Component16952({ value = 16952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16952, 'data-value': derived.doubled }, children);
}
export default Component16952;
