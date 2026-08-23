import React from 'react';
const LABEL_34934 = 'component_34934';
export function Component34934({ value = 34934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34934, 'data-value': derived.doubled }, children);
}
export default Component34934;
