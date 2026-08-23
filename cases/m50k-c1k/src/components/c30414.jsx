import React from 'react';
const LABEL_30414 = 'component_30414';
export function Component30414({ value = 30414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30414, 'data-value': derived.doubled }, children);
}
export default Component30414;
