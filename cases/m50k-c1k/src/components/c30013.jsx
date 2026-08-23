import React from 'react';
const LABEL_30013 = 'component_30013';
export function Component30013({ value = 30013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30013, 'data-value': derived.doubled }, children);
}
export default Component30013;
