import React from 'react';
const LABEL_31584 = 'component_31584';
export function Component31584({ value = 31584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31584, 'data-value': derived.doubled }, children);
}
export default Component31584;
