import React from 'react';
const LABEL_30635 = 'component_30635';
export function Component30635({ value = 30635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30635, 'data-value': derived.doubled }, children);
}
export default Component30635;
