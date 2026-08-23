import React from 'react';
const LABEL_46260 = 'component_46260';
export function Component46260({ value = 46260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46260, 'data-value': derived.doubled }, children);
}
export default Component46260;
