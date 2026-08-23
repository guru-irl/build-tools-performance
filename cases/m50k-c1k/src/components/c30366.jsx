import React from 'react';
const LABEL_30366 = 'component_30366';
export function Component30366({ value = 30366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30366, 'data-value': derived.doubled }, children);
}
export default Component30366;
