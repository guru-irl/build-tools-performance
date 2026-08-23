import React from 'react';
const LABEL_884 = 'component_884';
export function Component884({ value = 884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_884, 'data-value': derived.doubled }, children);
}
export default Component884;
