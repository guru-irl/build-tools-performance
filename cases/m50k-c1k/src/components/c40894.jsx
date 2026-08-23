import React from 'react';
const LABEL_40894 = 'component_40894';
export function Component40894({ value = 40894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40894, 'data-value': derived.doubled }, children);
}
export default Component40894;
