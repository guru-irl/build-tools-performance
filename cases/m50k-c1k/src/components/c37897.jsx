import React from 'react';
const LABEL_37897 = 'component_37897';
export function Component37897({ value = 37897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37897, 'data-value': derived.doubled }, children);
}
export default Component37897;
