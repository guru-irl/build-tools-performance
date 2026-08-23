import React from 'react';
const LABEL_45363 = 'component_45363';
export function Component45363({ value = 45363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45363, 'data-value': derived.doubled }, children);
}
export default Component45363;
