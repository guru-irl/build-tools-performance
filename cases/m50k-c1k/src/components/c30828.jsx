import React from 'react';
const LABEL_30828 = 'component_30828';
export function Component30828({ value = 30828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30828, 'data-value': derived.doubled }, children);
}
export default Component30828;
