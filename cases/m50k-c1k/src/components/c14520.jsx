import React from 'react';
const LABEL_14520 = 'component_14520';
export function Component14520({ value = 14520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14520, 'data-value': derived.doubled }, children);
}
export default Component14520;
