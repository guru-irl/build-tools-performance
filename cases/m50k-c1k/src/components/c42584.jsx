import React from 'react';
const LABEL_42584 = 'component_42584';
export function Component42584({ value = 42584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42584, 'data-value': derived.doubled }, children);
}
export default Component42584;
