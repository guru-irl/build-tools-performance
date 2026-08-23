import React from 'react';
const LABEL_46414 = 'component_46414';
export function Component46414({ value = 46414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46414, 'data-value': derived.doubled }, children);
}
export default Component46414;
