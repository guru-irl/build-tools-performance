import React from 'react';
const LABEL_16818 = 'component_16818';
export function Component16818({ value = 16818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16818, 'data-value': derived.doubled }, children);
}
export default Component16818;
