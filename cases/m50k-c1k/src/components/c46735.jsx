import React from 'react';
const LABEL_46735 = 'component_46735';
export function Component46735({ value = 46735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46735, 'data-value': derived.doubled }, children);
}
export default Component46735;
