import React from 'react';
const LABEL_30964 = 'component_30964';
export function Component30964({ value = 30964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30964, 'data-value': derived.doubled }, children);
}
export default Component30964;
