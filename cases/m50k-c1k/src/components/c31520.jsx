import React from 'react';
const LABEL_31520 = 'component_31520';
export function Component31520({ value = 31520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31520, 'data-value': derived.doubled }, children);
}
export default Component31520;
