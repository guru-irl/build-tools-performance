import React from 'react';
const LABEL_42901 = 'component_42901';
export function Component42901({ value = 42901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42901, 'data-value': derived.doubled }, children);
}
export default Component42901;
