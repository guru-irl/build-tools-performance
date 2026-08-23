import React from 'react';
const LABEL_46818 = 'component_46818';
export function Component46818({ value = 46818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46818, 'data-value': derived.doubled }, children);
}
export default Component46818;
